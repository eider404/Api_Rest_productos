# Api Rest 

## introducion:
Este repositorio es un proyecto en el cual consiste en el desarrollo de los principios básicos de una API REST, usando los métodos GET,  POST, PUT y DELETE. En este proyecto se usó tecnologías como Node, Express y MySQL.

## Instalación
Para poder empezar a usar el proyecto es nesesario tener instalado NodeJS y un servidor MySQL.

**Pasos para empezar:**

1.Crear la DB en tu servidor MySQL, usa el archivo [Tienda.sql](https://github.com/eider404/Api_Rest/blob/main/Tienda.sql "Tienda.sql") para crearlo.

2.Configura el archivo [app.js](https://github.com/eider404/Api_Rest/blob/main/app.js "app.js") según la configuración  de tu servidor MySQL.

    const dbOptions = {
        host: "127.0.0.1",            //configura
        port: 3306,                      //configura
        user: "root",                    //configura
        password: "",                  //configura
        database: "ApiRest"
    
    }

3.Utiliza el siguiente comando para encender el servidor de la API.

    node app.js

Output:

    Coneccion a ApiRest exitosa 
    example app listening on port 3000

## Funcionamiento:
Utilizando Postman es posible testear la API como se muestra en el siguiente **video**:

[![Watch the video](https://i.ibb.co/kM3x7JY/Captura-desde-2022-11-04-23-03-49.png)](https://www.youtube.com/watch?v=hgP67jsol1M)