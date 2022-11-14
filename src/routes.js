import express from "express"

const router = express.Router()
router.get("/ping",(req,res)=>{
    res.status(200).json({
        msg:"Successful Ping"
    })
})
router.get("/add",(req,res)=>{
    const {num1,num2} = req.query;
    
    console.log(req.query)
    res.status(200).json({
        num1:parseInt(num1),
        num2:parseInt(num2),
        suma:parseInt(num1)+parseInt(num2)
    })
})
export default router