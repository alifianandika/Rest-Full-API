/**
 * impoert express project
 * 
 */
const { json } = require("express");
const express = require("express");

/**
 * object yang akan dibuat
 * 
 */
const app = express();

/**
 * req.body + midleware 
 */
app.use(express.json());


/**
 * path routing home
 * 
 */
app.get("/", (req, res) => {
    res.send("Hello Expres");
});


/***
 * route detail 
 */
const router = require("./Routes/api");
app.use(router);










// port project => pakai node app.js
/**
 * listen info
 */
app.listen(4000, () => {
    console.log("Server Running at http://localhost:4000");
});




/**
 * tools 1 => nodemon(npm i nodemon --save-dev)
 * tools 2 => npm(npm init -y)(npm run start)
 * 
 * 
 */