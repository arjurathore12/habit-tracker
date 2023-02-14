const express =require('express');
const router= express.Router();
router.get("/",(req,res)=>{
    console.log("testing")
    return res.status(200).send({
        data:"1st Api"
    })
})

module.exports=router;