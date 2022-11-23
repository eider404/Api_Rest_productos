
function GetAll(){
    fetch('https://products-api.fly.dev/')
        .then(res => res.json())
        .then(res => 
            document.querySelector("#all").innerHTML= JSON.stringify(res) 
        )
        .catch(err => console.log(err))
}

function Search(){
    let search = document.querySelector("#search");

    fetch(`https://products-api.fly.dev/${ search.searchId.value }`)
        .then(res => res.json())
        .then(res =>{

            if(res[0] == undefined) { throw new Error('¡La id no existe!') }

            document.querySelector("#busqueda").className = "alert alert-primary";
            document.querySelector('#busqueda').innerHTML = JSON.stringify(res[0])
        })
        .catch(err => {
            document.querySelector("#busqueda").className = "alert alert-danger";
            document.querySelector('#busqueda').innerHTML = err
        })
}



function Eliminar(){

    let fmDelete = document.querySelector( '#form_Delete' )
    //hace un get para comprobar si existe esa id
    fetch(`https://products-api.fly.dev/${ fmDelete.id.value }`)
        .then(res=> res.json())
        .then(res=>{
            if(res[0] == undefined) { throw new Error('¡La id no existe!') }

            //consume el delete
            fetch( `https://products-api.fly.dev/delete/${ fmDelete.id.value }`, {
                method: 'DELETE'
            })
            .then( raw =>{
                document.querySelector("#Delete").className = "alert alert-success",
                document.querySelector('#Delete').innerHTML = "Eliminaste: "+JSON.stringify(res[0])
            })
            .catch( err => console.log( err ))

        })
        .catch(err=>{
            document.querySelector("#Delete").className = "alert alert-danger"
            document.querySelector('#Delete').innerHTML = err
        })

}


function Agregar(){
    let fm_Post = document.querySelector( '#form_post' )
    //hace un get para comprobar si existe esa id
    fetch(`https://products-api.fly.dev/${ fm_Post.id.value }`)
        .then(res=> res.json())
        .then(res=>{ 
            if(res[0] != undefined) { throw new Error('¡La id ya existe!') }

            const obj = {}
            new FormData( fm_Post ).forEach( ( value, key ) => obj[ key ] = value )

            //consume el post
            fetch( `https://products-api.fly.dev/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( obj )
            })
            .then(res => res.json())
            .then( data =>{
                document.querySelector("#newProduct").className = "alert alert-success",
                document.querySelector("#newProduct").innerHTML ="Agregaste: "+ JSON.stringify(data) 

            })
            .catch( err => console.log( err ))
            

        })
        .catch(err=>{
            document.querySelector("#newProduct").className = "alert alert-danger"
            document.querySelector('#newProduct').innerHTML = err
        })
}



async function Actualizar(){

    let fm_put = document.querySelector( '#form_put' )
    document.querySelector("#newProduct").className = " ";
    document.querySelector('#newProduct').innerHTML =" ";

    //hace un get para comprobar si existe esa id
    fetch(`https://products-api.fly.dev/${ fm_put.id.value }`)
        .then(res=> res.json())
        .then(res=>{ 
            if(res[0] == undefined) { throw new Error('¡La id no existe!') }

            document.querySelector("#oldProduct").className = "alert alert-secondary";
            document.querySelector('#oldProduct').innerHTML ="Old: "+JSON.stringify(res[0]);

            const obj = {}
            new FormData( fm_put ).forEach( ( value, key ) => obj[ key ] = value )



            
            //consume el put
            fetch( `https://products-api.fly.dev/update/${ fm_put.id.value }`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( obj )
            })
            .then(res => res.json())
            .then( data =>{
                document.querySelector("#newProduct").className = "alert alert-success",
                document.querySelector("#newProduct").innerHTML ="New: "+ JSON.stringify(data) 

            })
            .catch( err => console.log( err ))
            

        })
        .catch(err=>{
            document.querySelector("#oldProduct").className = "alert alert-danger"
            document.querySelector('#oldProduct').innerHTML = err
        })

    
}















