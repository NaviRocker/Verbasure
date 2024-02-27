

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const exp = require('constants');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/images')
    },
    filename : (req, file, cb) =>{
        cb(null, file.fieldname + "_"+Date.now()+ path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "verbasure"
})


app.post('/signup',(req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json({msg:"Successfully Inserted Data",code:"200",name:"Charuka",affectedRows:1});
    })
})
  
app.post('/login',(req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";

    
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            const userId= data[0].id;
            const userName = data[0].name;
            const passWord = data[0].password;
           return res.json({Message :"Success",userName:userName,passWord:passWord});
          //return res.status(200).json({ status: "Success", userId });
        }
        else {
            return res.json("Failed");
        }
        
    })
})

app.post('/upload', upload.single('image'),  (req,res) =>{
      const image = req.file.filename;
      const name = req.file.name;
      console.log(name)
      const sql = "UPDATE login SET image = ? where name=?";
      db.query(sql, [image,name], (err, result) =>{
        if(err) return res.json({Message: "Error"});
        return res.json({Message: "Success"});
      })


})

app.get('/', (req, res) =>{
    const sql = 'select * from login';
    db.query(sql, (err, result) =>{
        if(err) return res.json("Error");
        return res.json(result);
    })

})
app.listen(3002, () => {
    console.log("listening on port"+3002);
})