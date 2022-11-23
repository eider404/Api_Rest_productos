const express = require("express");
const cors = require('cors');
const app = express();
//port listening
const PORT = process.env.PORT || 3000
//impotar rutas
const routes = require("./routes")

const bodyParcer = require('body-parser');

//Database
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || ''
const DB_NAME = process.env.DB_NAME || 'ApiRest'
const DB_PORT = process.env.DB_PORT || 3306

const mysql = require('mysql');
const myconnection = require("express-myconnection");
const dbOptions = {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME

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
app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({extended:false}));


//direcciones
app.use("/",routes) 

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})