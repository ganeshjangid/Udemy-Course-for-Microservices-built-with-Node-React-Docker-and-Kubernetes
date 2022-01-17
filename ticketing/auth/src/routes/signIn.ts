import express from 'express';

const router=express.Router();

router.post('/sign-in',(req,res)=>{
    res.send("Hii");
});

export {router as signInRouter}