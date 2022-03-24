/**
 * import model pasiens
 */
const { response } = require("express");
const PasiensModel = require("../Model/PasiensModel");

class Pasiens {
    //  index(req, res) {
        // PasiensModel.all(function(result){
        //     const data = {
        //             mesagge : "Tampil Response",
        //             data : result,
                   
                    
        //         }
        
                
        //         res.json(data);

        // });




    //     const pasiensmodel = PasiensModel.all();

    //     const {id, nama, handphone, alamat, status, tanggalmasuk, tanggalkeluar, penyakit} = req.body;
    //     const data = {
    //         mesagge : (`== Tampilkan Data Pasien == ID ${id} |  Atas Nama : ${nama} |  Nomer Handphone : ${handphone} |  Alamat : ${alamat}  | Status : ${status}  | Tanggal Masuk : ${tanggalmasuk} | Tanggal Keluar : ${tanggalkeluar}  | Penyakitnya : ${penyakit} `),
    //         data : pasiensmodel,
    //         notif : "Sukses",
            
    //     }

        
    //     res.json(data);
    // }


    /**
     * 
     * @param {*} req 
     * @param {*} res
     * 
     * async + wait pada controller dari model 
     */

    //get all resounce
    async index(req, res) {
       
        const pasiensmodel =  await PasiensModel.all();

        const data = {
            mesagge : "Get All Resource",
            data : pasiensmodel,
            
            
        };

        
        res.json(data);
        //chaining method
        res.status(200).json(data);
    }

    // index(req, res) {
    //     const {id, nama, handphone, alamat, status, tanggalmasuk, tanggalkeluar, penyakit} = req.body;
       

    //     res.send(`== Tampilkan Data Pasien == 

    //     ID ${id} |  Atas Nama : ${nama} |  Nomer Handphone : ${handphone} |  
    //     Alamat : ${alamat}  | Status : ${status}  | Tanggal Masuk : ${tanggalmasuk} 
    //     | Tanggal Keluar : ${tanggalkeluar}  | Penyakitnya : ${penyakit} `);
    // }

    // store(req, res){
    //     const { id, nama, handphone, alamat, status, tanggalmasuk, tanggalkeluar, penyakit } = req.body;
    //     res.send(`== Tambah Data Pasien ===

    //     ID ${id} |  Atas Nama : ${nama} |  Nomer Handphone : ${handphone} |  
    //     Alamat : ${alamat}  | Status : ${status}  | Tanggal Masuk : ${tanggalmasuk} 
    //     | Tanggal Keluar : ${tanggalkeluar}  | Penyakitnya : ${penyakit} `);
    // }


    //nih yah sob belum tuntas

   async store(req, res){
        // const { id, nama, handphone, alamat, status, tanggalmasuk, tanggalkeluar, penyakit } = req.body;
        // console.log(req.body);
        const pasiensmodel = await PasiensModel.create(req.body);
        const data = {
            mesagge : "Resource is added successfully",
            data : pasiensmodel,
            notif : "Sukses",
        };
        
        res.json(data).json(201);
       
       
    }



    // store(req, res){
    //     const {id, nama, handphone, alamat, status, tanggalmasuk, tanggalkeluar, penyakit} = req.body;
    //     const data = {
    //         mesagge : (`== Tambah Data Pasien == ID ${id} |  Atas Nama : ${nama} |  Nomer Handphone : ${handphone} |  Alamat : ${alamat}  | Status : ${status}  | Tanggal Masuk : ${tanggalmasuk} | Tanggal Keluar : ${tanggalkeluar}  | Penyakitnya : ${penyakit} `),
    //         data : [],
    //         notif : "Sukses",
    //     };

    //     res.json(data);
    // }

    // update(req, res){
    //     const { id ,nama, handphone, alamat, status, tanggalmasuk, tanggalkeluar, penyakit } = req.body;
    //     res.send(`== Edit Data Pasien == 
        
    //     ID ${id} |  Atas Nama : ${nama} |  Nomer Handphone : ${handphone} |  
    //     Alamat : ${alamat}  | Status : ${status}  | Tanggal Masuk : ${tanggalmasuk} 
    //     | Tanggal Keluar : ${tanggalkeluar}  | Penyakitnya : ${penyakit}`);
    // }

    // update(req, res) {
    //     const {id, nama, handphone, alamat, status, tanggalmasuk, tanggalkeluar, penyakit} = req.body;
    //     const data = {
    //         mesagge : (`== Edit Data Pasien ==  ID ${id} |  Atas Nama : ${nama} |  Nomer Handphone : ${handphone} |  Alamat : ${alamat}  | Status : ${status}  | Tanggal Masuk : ${tanggalmasuk} | Tanggal Keluar : ${tanggalkeluar}  | Penyakitnya : ${penyakit} `),
    //         data : [],
    //         notif : "Sukses",
    //     };

    //     res.json(data);
    // }

    async update(req, res) {
        // console.log(req.params.id);

        const { id } = req.params;
        const pasiensmodel =  await PasiensModel.find(id);
        

        // console.log(pasiensmodel);

        if (pasiensmodel){
            //update data
            const pasiensupdated =  await PasiensModel.update(id, req.body);

            const data = {
                mesagge : "Resource is update succesfully",
                data : pasiensupdated,
                notif : "Sukses",
            };
    
            res.json(data).json(200);
        }else{
            //kirim notif not found
            const data = {
                mesagge : "Resource not found",
                data : pasiensupdated,
                notif : "Not Found",
            };
    
            res.status(404).json(data);
            
        }
    }


    // destroy(req, res){
    //     const { id ,nama, handphone, alamat, status, tanggalmasuk, tanggalkeluar, penyakit} = req.body;

    //     res.send(`== Hapus Data Pasien ==
        
    //     ID ${id} |  Atas Nama : ${nama} |  Nomer Handphone : ${handphone} |  
    //     Alamat : ${alamat}  | Status : ${status}  | Tanggal Masuk : ${tanggalmasuk} 
    //     | Tanggal Keluar : ${tanggalkeluar}  | Penyakitnya : ${penyakit}`);
    // }

    // destroy(req, res){
    //     const {id, nama, handphone, alamat, status, tanggalmasuk, tanggalkeluar, penyakit} = req.body;
    //     const data = {
    //         mesagge : (`== Hapus Data Pasien == ID ${id} |  Atas Nama : ${nama} |  Nomer Handphone : ${handphone} |  Alamat : ${alamat}  | Status : ${status}  | Tanggal Masuk : ${tanggalmasuk} | Tanggal Keluar : ${tanggalkeluar}  | Penyakitnya : ${penyakit} `),
    //         data : [],
    //         notif : "Sukses",
    //     };

        

    //     res.json(data);


    // }


    // destroy(req, res){
    //     const {id, nama, handphone, alamat, status, tanggalmasuk, tanggalkeluar, penyakit} = req.body;
    //     const data = {
    //         mesagge : (`== Hapus Data Pasien == ID ${id} |  Atas Nama : ${nama} |  Nomer Handphone : ${handphone} |  Alamat : ${alamat}  | Status : ${status}  | Tanggal Masuk : ${tanggalmasuk} | Tanggal Keluar : ${tanggalkeluar}  | Penyakitnya : ${penyakit} `),
    //         data : [],
    //         notif : "Sukses",
    //     };

        

    //     res.json(data);


    // }


    async destroy(req,res) {
        const { id } = req.params;


        const pasiens = await PasiensModel.find(id);

        if(pasiens) {
            //cukup hapus jangan pakai return yah ...  ngk perlu nilai balik buat kita
           await PasiensModel.delete(id);

           const data = {
                mesagge : "Resource is delete succesfully",
                notif : "Sukses",

            };

             res.json(data).json(200);


        }else{
            //data tidak ada 
            const data = {
                mesagge : "Resource not found",
                data : pasiensupdated,
                notif : "Not Found",
            };
    
            res.status(404).json(data);
        }
    }



    async show(req, res){
        //cari data baru laksanakan

        const {id} = req.params;

        const pasiens = await PasiensModel.find(id);

        if(pasiens){
            const data = {
                mesagge : "Get Detail Resource",
                data : pasiens,
                notif : "Sukses",
            };
    
            res.status(200).json(data);
        }else{
            const data = {
                mesagge : "Resource not found",
                notif : "Not Found",
            };
    
            res.status(404).json(data);
        }

    }


    async search(req, res){
        const {id, nama} = req.params;

        const pasienssearch = await PasiensModel.search(id,nama);

        if(pasienssearch){
            const data = {
                mesagge : "Get searched resource",
                data : pasienssearch,
                notif : "Sukses",
            };
    
            res.status(200).json(data);
        }else{
            const data = {
                mesagge : "Resource not found",
                notif : "Not Found",
            };
    
            res.status(404).json(data);
        }

    }

    


    async positive(req, res){
        const {status} = req.params;
        const pasienspositive = await PasiensModel.findByStatus(status);

        if(pasienspositive){
            const data = {
                mesagge : "Get positive resource",
                data : pasienspositive,
                notif : "Perbanyak Doa dan Jaga Imunmu Yah",
            };
    
            res.status(200).json(data);
        }

    }


    async recovered(req, res){
        const {status} = req.params;
        const pasiensrecovered = await PasiensModel.findByStatus(status);

        if(pasiensrecovered){
            const data = {
                mesagge : "Get recovered resource",
                data : pasiensrecovered,
                notif : "Tetap Sehat dan Tetap Dirumah Ajah",
            };
    
            res.status(200).json(data);
        }


    }


    async dead(req, res){
        const {status} = req.params;
        const pasiensdead = await PasiensModel.findByStatus(status);

        if(pasiensdead){
            const data = {
                mesagge : "Get dead resource",
                data : pasiensdead,
                notif : "Turut Berduka Cita :(",
            };
    
            res.status(200).json(data);
        }


    }




}

/**
 * buat objek  + exports + req.body.Nama
 */
const object = new Pasiens();

/**
  * export module object
  */
module.exports = object;

