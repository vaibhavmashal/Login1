const express = require('express');
const path = require('path');
const client = require('../dbconnection');
const login_details = client.db('Demo').collection('Login');

const router = express.Router();


    router.get("", async (req, res) => {
        res.sendFile(path.join(__dirname, '../public/views/index.html'));
        // let data= await login_details.find({}).toArray();
        // console.log(data);
    });

    router.post('/checkduplicate', async (req, res) => {
        let flag = await login_details.find({ email: req.body.email }).toArray();
        if (flag.length == 0)
            res.json({ duplicate: false });
        else
            res.json({ duplicate: true });
    })

    router.post("/register", async (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        console.log(name);
        console.log(email);
        console.log(password);
        const data = await login_details.insertOne({ name: name , email: email, password: password });
        console.log(data);
        res.json({ status: 'ok' });
                 
    } );


    router.post("/login", async (req, res) => {
        const data1=req.body;
        
        console.log(data1);
        const data = await login_details.findOne({ email:data1.email, password: data1.password });
     
        if (data) {
            res.json({ status: 'ok' });
        }
        else {
            res.json({ status: 'error' });
        }
    });

   
   




module.exports = router;
