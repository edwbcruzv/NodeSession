const express =require("express")
const app=express()
const path=require("path")
const session=require('express-session')
const flash=require('connect-flash')

// settings
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

// global variable
app.use((req,res,next)=>{
    app.locals.mensaje_global=req.flash('var_global')
    next()
})


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret:"mi llave secreta", // cada sesion se guarde de manera unica
    resave:false,
    saveUninitialized:false
}))
app.use(flash())


// routes
app.use('/',require('./routes/index'))
app.use('/',require('./routes/profile'))

app.listen(3000)
console.log("Corriendo servidor")