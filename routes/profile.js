const express=require('express')
const router=express.Router()

router.get('/profile',(req,res)=>{
    const user=req.flash('user')[0]

    console.log(user)

    res.render('profile',{user})
})

module.exports=router