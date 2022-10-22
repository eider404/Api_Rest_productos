# Api Rest#

## Introducion:
Este repositorio es una actividad académica en el cual consiste en el desarrollo de los principios de una API REST, usando los métodos GET,  POST, PUT y DELETE. En este proyecto se usó tecnologías como Node, Express y MySQL.

## Instalación
Para poder empezar a usar el proyecto es nesesario tener instalado NodeJS, MySQL y Postman (o otro tester de APIs).
Pasos para empezar:

1.Crear la DB en tu servidor MySQL, usa el archivo [Tienda.sql](https://github.com/eider404/Api_Rest/blob/main/Tienda.sql "Tienda.sql") para crearlo.

2.Configura el archivo [app.js](https://github.com/eider404/Api_Rest/blob/main/app.js "app.js") según la configuración  de tu servidor MySQL.

    const dbOptions = {
        host: "127.0.0.1",            //configura
        port: 3306,                      //configura
        user: "root",                    //configura
        password: "",                  //configura
        database: "ApiRest"
    
    }

3.Utiliza el siguiente comando para correr la API.

    node app.js

Output:

    Coneccion a ApiRest exitosa 
    example app listening on port 3000

## Funcionamiento:
Utilizando Postman es posible testear la API como se muestra en el siguiente **video**:

[![Watch the video](https://i.blogs.es/ad7836/api/1366_521.jpg)](https://youtu.be/e0UTc1nAqpQ)

### Colaboradores:
1. Eider Moises Pool Arjona 
2. Edilson Yair Hernandez Pech 
3. Jesus Alberto Pech Pech 
4. Rowan Abisai Ojeda Kumul 
5. Juan de Dios Criollo Kantun
