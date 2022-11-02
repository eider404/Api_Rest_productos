const express = require("express");
const cors = require('cors');

const app = express();
const port= 3000;
//impotar rutas
const routes = require("./routes")

const bodyParcer = require('body-parser');

//coneccion a la DB
const mysql = require('mysql');
const myconnection = require("express-myconnection");
const dbOptions = {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "ApiRest"

}
try {
    app.use(myconnection(mysql, dbOptions,'single'))
    console.log(`Coneccion a ${dbOptions.database} exitosa `)
} catch (error) {
    console.log(error)
}

//accesos a las origenes
app.use(cors())

//analiza las solicitudes JSON 
//app.use(express.json())
app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({extended:false}));

//set the view engine to ejs
app.set('views','./views')
app.set('view engine', 'ejs');

//direcciones
app.use("/",routes) 

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})