const { json } = require("express");
const express = require("express")
const routes = express.Router()

routes.get('/:id',(req, res)=>{
    //res.render('pages/index');
    
    req.getConnection((err, conn)=>{
        if(err) {
            return res.send(err) 
        }
        
        conn.query("SELECT * FROM Product WHERE id = ?", [req.params.id], (err, rows)=>{
            if(err) { return res.send(err) }
            //res.render('pages/index',{rows});
            res.json(rows);
        })    
    })
})


routes.get('/',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err) }
        
        conn.query("SELECT * FROM Product", (err, rows)=>{
            if(err) { return res.send(err) }
            //res.render('pages/index',{rows});
            res.json(rows);
        })   
    })
})




routes.post('/',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err)}
         
        conn.query("INSERT INTO Product set ?", [req.body], (err, rows)=>{
            if(err) { return res.send(err) }
            res.send(`product inserted `);
        })
        
    })
})


routes.put('/:id',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err) }
          
        conn.query("UPDATE Product set ? WHERE id = ?",[req.body, req.params.id], (err, rows)=>{
             if(err) { return res.send(err) }
             res.send(`product update`);
        })
    })
})

routes.delete('/:id',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err) }
          
        conn.query("DELETE FROM Product WHERE id = ?",[req.params.id], (err, rows)=>{
             if(err) { return res.send(err) }
             res.send(`product deleted `);
        })
    })
})







module.exports = routes