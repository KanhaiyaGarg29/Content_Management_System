const express=require('express');
const router=express.Router();

const{getData}=require('../controller/getData');

router.get("/content/:value",getData);

module.exports=router