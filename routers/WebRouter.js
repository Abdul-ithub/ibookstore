const router = require('express').Router();
const ApiResponse = require('../utils/ApiResponse');
const {User,Customer,Bookseller} = require('../models');
const ErrorParser = require('../utils/ErrorParser');

// name,address,phone,email,password
router.post('/customer_reg',async (req,res)=>
{
    const reqdata = req.body;
    try {
        const {email,password} = reqdata;
        const userData = {email,password,type:"customer",active_status:true,otp:0}
        const user = await User.create(userData);

        const {name,address,phone} = reqdata;
        const customerData = {name,address,phone,email,user : user.id}
        const customer = await Customer.create(customerData);
        res.status(201).json(new ApiResponse(true,"Customer saved sucessfully!",customer,null));
    } catch (error) {
        res.status(500).json(new ApiResponse(false,"Customer not saved!",null,ErrorParser(error)));
    }

});

// company_name,name,address,phone,email,password,gstno,regno
router.post('/seller_reg',async (req,res)=>
{
    const reqdata = req.body;
    try {
        const {email,password} = reqdata;
        const userData = {email,password,type:"seller",active_status:true,otp:0}
        const user = await User.create(userData);

        const {company_name,name,address,phone,gstno,regno} = reqdata;
        const sellerData = {company_name,name,address,phone,email,gstno,regno,user : user.id}
        const seller = await Bookseller.create(sellerData);
        res.status(201).json(new ApiResponse(true,"Seller saved sucessfully!",seller,null));
    } catch (error) {
        res.status(500).json(new ApiResponse(false,"Seller not saved!",null,ErrorParser(error)));
    }

});

router.post('/login',(req,res)=>{

});

router.get('/list/category',(req,res)=>{

});

router.get('/list/book',(req,res)=>{

});

module.exports = router;