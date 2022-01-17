import express from 'express';

const router=express.Router();

router.get('/current-user',(req,res)=>{
    res.send("Hii");
});

export {router as currentUserRouter}