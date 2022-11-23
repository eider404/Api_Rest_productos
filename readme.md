# Api Rest  
💥[**Link de la API**](https://products-api.fly.dev/ "**Link de la API**")💥

## ✅ introducion:
Este repositorio es un proyecto en el cual consiste en el desarrollo de los principios básicos de una API REST, usando los métodos GET,  POST, PUT y DELETE. En este proyecto se usó tecnologías como Node, Express y MySQL.

## ✅ ¿Como consumir la API?
En este repositorio existe un ejemplo en el cual muestra como consumir esta API, ver en el directorio [consumoAPI](https://github.com/eider404/Api_Rest/tree/main/consumoAPI "consumoAPI")

**GET:**
- Genera todos los registros:  https://products-api.fly.dev/
- Genera un registro con un id específico: https://products-api.fly.dev/4

**POST:** https://products-api.fly.dev/new
- body: 
```javascript
 {
            "id": 20,									// INT
            "description": "Coca Cola",	  // STRING
            "price": 12,							// INT
            "count": 2								 // INT
 }
```

**PUT:** https://products-api.fly.dev/update/5
- id: debe ser un id existente, *ejemplo: 5*
- body: 
```javascript
 {
            "description": "Coca Cola Zero",	  // STRING
            "price": 15,							// INT
            "count": 2								 // INT
 }
```

**DELETE:** https://products-api.fly.dev/delete/5
- id: debe ser un id existente, *ejemplo: 5*

### ✨ Funcionamiento:
- **Funcionamiento de la API con UI:**


- **Funcionamiento de la API:**


## ✅ Instalación localmente
Para poder empezar a usar el proyecto es nesesario tener instalado NodeJS y un servidor MySQL.

**Pasos para empezar:**

1.Crear la DB en tu servidor MySQL, usa el archivo [Tienda.sql](https://github.com/eider404/Api_Rest/blob/main/Tienda.sql "Tienda.sql") para crearlo.

2.Configura el archivo [app.js](https://github.com/eider404/Api_Rest/blob/main/app.js "app.js") según la configuración  de tu servidor MySQL.

    const DB_HOST = process.env.DB_HOST || 'localhost'			//Edit
    const DB_USER = process.env.DB_USER || 'root'					//Edit
    const DB_PASSWORD = process.env.DB_PASSWORD || ''	 //Edit
    const DB_NAME = process.env.DB_NAME || 'ApiRest'
    const DB_PORT = process.env.DB_PORT || 3306					//Edit


3.Utiliza el siguiente comando para encender el servidor de la API.

    node app.js

Output:

    Coneccion a ApiRest exitosa 
    example app listening on port 3000

