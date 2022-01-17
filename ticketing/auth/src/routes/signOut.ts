import express from 'express';

const router=express.Router();

router.post('/sign-out',(req,res)=>{
    res.send("Hii");
});

export {router as signOutRouter}