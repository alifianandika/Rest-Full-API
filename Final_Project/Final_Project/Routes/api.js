const express = require("express");
const router = express.Router();



/**
  * routing pasiens + import
  */
const Pasiens =  require("../Controller/Pasiens");


/**
 * routing + opsional dengan perubahan
 * ctrl + d + rename
 */
// router.get("/pasiens", (req, res) => {
//     res.send("Tampilkan Routing");
// });

// router.get("/pasiens", (req, res) => {
//     Pasiens.index(req,res);
// });


/**
 * callback
 */
router.get("/pasiens", Pasiens.index );

// router.post("/pasiens", (req, res) => {
//     res.send("Tambahkan Routing");
// });

router.post("/pasiens", Pasiens.store);

// router.put("/pasiens/:id", (req, res) => {
//     res.send("Mengedit Routing  " +  req.params.id);
// });

// router.delete("/pasiens", (req, res) => {
//     res.send("Hapuskan Routing");
// });

/**
 * descracting + bactick
 */
// router.put("/pasiens/:id", (req, res) => {
//    const {id} =  req.params;
//    res.send(`Edit Routing ${id}`);
// });

router.put("/pasiens/:id", Pasiens.update);

// router.delete("/pasiens/:id", (req, res) => {
//     const {id} =  req.params;
//     res.send(`Hapis Routing ${id}`);
//  });

router.delete("/pasiens/:id", Pasiens.destroy);

//get one resource
router.get("/pasiens/:id", Pasiens.show);

//Search resource
router.get("pasiens/search/:nama", Pasiens.search);

// //Get positive resource
router.get("pasiens/status/positive", Pasiens.positive);

// //Get recovered resource
router.get("pasiens/search/recovered", Pasiens.recovered);

// //Get dead resource
router.get("pasiens/search/dead", Pasiens.dead);



 

 /**
  * export module router
  */
 module.exports =  router;