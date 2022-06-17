const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/register',(req,res)=>{
    console.log(req.body)


    // req.session.mi_variable="valor entre sesiones"
    req.flash('user',req.body) // lo mismo que lo anterior pero se elimina despues de usarse
    
    // res.send("desde register")
    res.redirect('/profile')

})

module.exports=router
