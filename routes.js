const { json, application } = require("express");
const express = require("express")
const routes = express.Router()


routes.get('/',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err) }
        
        conn.query("SELECT * FROM Product", (err, rows)=>{
            if(err) { return res.send(err) }
            //res.render('index',{rows});
            //res.json(rows); 
            res.render('index',{rows})
        })   
    })
})

routes.get('/new',(req,res)=>{
    res.render('new',{title: 'Nueva entrada'})
})
routes.get('/update',(req,res)=>{
    res.render('update',{title: 'actualizar entrada'})
})
routes.get('/delete',(req,res)=>{
    res.render('delete',{title: 'eliminar entrada'})
})


routes.post('/new',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err)}
         
        conn.query("INSERT INTO Product set ?", [req.body], (err, rows)=>{
            if(err) { return res.send(err) }
            //res.send(`product inserted `);
            res.redirect('/')
        })
        
    })
})


//put FUNCIONA pero no como deberia ser
routes.post('/update',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err) }
          
        conn.query("UPDATE Product set ? WHERE id = ?",[req.body, /*req.params.id*/req.body.id], (err, rows)=>{
             if(err) { return res.send(err) }
             //res.send(`product update`);
             res.redirect('/')
        })
    }) 
    
})

//delete FUNCIONA pero no como deberia ser
routes.post('/delete',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err) }
          
        conn.query("DELETE FROM Product WHERE id = ?",[/*req.params.id*/req.body.id ], (err, rows)=>{
             if(err) { return res.send(err) }
             //res.send(`product deleted `);
             res.redirect('/')
        })
    })
})

routes.get('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) {
            return res.send(err) 
        }
        
        conn.query("SELECT * FROM Product WHERE id = ?", [req.params.id], (err, rows)=>{
            if(err) { return res.send(err) }
            //res.status(404).send('Sorry cant find that!');
            res.json(rows);
        })    
    })
})





module.exports = routes