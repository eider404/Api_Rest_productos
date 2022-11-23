const { json, application } = require("express");
const express = require("express")
const routes = express.Router()



routes.get('/',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err) }
        
        conn.query("SELECT * FROM Product", (err, rows)=>{
            if(err) { return res.send(err) }
            res.json(rows);
        })   
    })
})


routes.post('/new',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err)}

        conn.query("INSERT INTO Product set ?", [req.body], (err, rows)=>{
            if(err) { return res.send(err) }
            res.json(req.body);
        })
        
    })
})



routes.put('/update/:id',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err) }
          
        conn.query("UPDATE Product set ? WHERE id = ?",[req.body, req.params.id], (err, rows)=>{
            if(err) { return res.send(err) }
            res.json(req.body)
        })
    }) 
    
})


routes.delete('/delete/:id',(req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) { return res.send(err) }
        
        conn.query("DELETE FROM Product WHERE id = ?",[req.params.id ], (err, rows)=>{
            if(err) { return res.send(err) }
            res.json({rows})
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
            res.json(rows);
        })    
    })
})





module.exports = routes