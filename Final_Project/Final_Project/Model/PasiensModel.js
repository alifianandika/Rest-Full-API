/**
 * import db
 */
const db = require("../Config/database");

/**
 * model pasiens 
 * 
 * method itu melekat pada objek 
 */
class PasiensModel {
    // static all(callback){
        //param query
    static all(){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM pasiens";
            db.query(sql,(err, results) => {
                    resolve(results);
                    
    
                    
                }
            );
        

        });
        // const sql = "SELECT * FROM pasiens";
        
        // db.query(
        //     sql,(err, result) => {
                // console.log(result);
                // return result;
                // callback(result);

                
        //     }
        // );

    }

    /**
     * create point
     */
    //  static async create(data){
    //     //promise 1
    //     const id = await new Promise((resolve, reject) => {
    //         //insert database + escaping value
    //         const sql = "INSERT INTO pasiens SET ?";
    //         db.query(sql, data, function(resolve, results) {
    //             // console.log(results.insertId);
    //             resolve(results.insertId);
    //         });
    //     });


    //     //promise 2
    //     new Promise((resolve, reject) => {
    //         const sql = "SELECT * FROM pasiens WHERE id = ?";
    //         db.query(sql, id, (err, results) => {
    //             resolve(results);
    //         });
    //     });
    // }

    static create(data){
        //promise 1
        const id =  new Promise((resolve, reject) => {
            //insert database + escaping value
            const sql = "INSERT INTO pasiens SET ?";
            db.query(sql, data, function(resolve, results) {
                // console.log(results.insertId);
                resolve(results.insertId);
            });
        });


        //promise 2
        new Promise((resolve, reject) => {
            const sql = "SELECT * FROM pasiens WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }


    static find(id){
        //promises 1
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM pasiens WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data){
        await new Promise((resolve, reject) => {
            const sql = "UPDATE pasiens SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });


        const pasiens = await this.find(id);
        return pasiens;

       
    }



    static delete(id){
        return new Promise((resolve, reject) => { 
            const sql = "DELETE FROM pasiens WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });

        
    }


    /**
     * agar mencari nama gunakan array biar tertata rapih karena menentuka array bisa menyeleksi data
     * 
     * http://localhost:4000/pasiens/12
    */
    static search(nama, id){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM pasiens WHERE nama LIKE ?";
            db.query(sql, [id, nama], (err, results) => {
                resolve(results[0]);
            });
        });

    }


    /**
     * 
     * @param {*} id 
     * @param {*} nama 
     * @param {*} status 
     * @returns 
     */
    static findByStatus(id,status){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM pasiens WHERE id = ?";
            db.query(sql, [id, status], (err, results) => {
                resolve(results[0]);
            });
        });


       

    }

    static async positive(nama, status){
        await new Promise((resolve, reject) => {
            const sql = "SELECT * FROM pasiens WHERE nama, status  LIKE "%positive%"";
            db.query(sql, [nama, status], (err, results) => {
                resolve(results);
            });
        });


        const pasienspositive = await this.findByStatus(id,status);
        return pasienspositive;


    }

    
    static async recovered(nama, status){
        await new Promise((resolve, reject) => {
            const sql = "SELECT * FROM pasiens WHERE nama, status  LIKE "%sembuh%"";
            db.query(sql, [nama, status], (err, results) => {
                resolve(results);
            });
        });


        const pasienspositive = await this.findByStatus(id,status);
        return pasienspositive;


    }


    static async dead(nama, status){
        await new Promise((resolve, reject) => {
            const sql = "SELECT * FROM pasiens WHERE nama, status  LIKE "%meninggal%"";
            db.query(sql, [nama, status], (err, results) => {
                resolve(results);
            });
        });


        const pasienspositive = await this.findByStatus(id,status);
        return pasienspositive;


    }








    

    




    

    
}











/**
 * exports model
 */
module.exports = PasiensModel;

