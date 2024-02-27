
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const exp = require('constants');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('../public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, '../public/images')
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
    password: "password",
    database: "verbasure"
})


  
app.post('/login',(req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";

    
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
         
            const userName = data[0].name;
            const passWord = data[0].password;
            const pointsLogin = data[0].points;
           return res.json({Message :"Success",userName:userName,passWord:passWord,pointsLogin:pointsLogin});
          //return res.status(200).json({ status: "Success", userId });
        }
        else {
            return res.json("Failed");
        }
        
    })
})

app.post('/signup', upload.single('avatar_image'),  (req,res) =>{
    const {name,email,password,points} = req.body;
      const avatar_image = req.file.filename;

      // console.log(avatar_image)
      const sql = "INSERT INTO login (`name`,`email`,`password`,`image`,`points`) VALUES (?, ?, ?, ?, ?)";
      db.query(sql, [name,email,password,avatar_image,points], (err, result) =>{
        if(err) return res.json({Message: "Error"});
        return res.json({Message: "Success"});
      })


})

app.post('/image', (req, res) =>{
    const{name} = req.body;
    
    const sql = 'select image from login where `name`=?';
    db.query(sql,[name], (err, result) =>{
       console.log(result)
        if(err) return res.json("Error");
        return res.json(result);
        
    })

})

app.post('/points', (req, res) =>{
    const{name} = req.body;
    
    const sql = 'select * from login where `name`=?';
    db.query(sql,[name], (err, result) =>{
       // console.log(result+'points')
        if(err) return res.json("Error");
        return res.json(result);
        
    })

})



app.use(cors());

// app.get('/image/:id', (req, res) => {
// //  const imageId = req.params.id;
//   const imageId = 31;

//   db.query('SELECT image FROM login WHERE id = ?', [imageId], (err, results) => {
//     if (err) {
//       console.log('Error querying MySQL:', err);
//       res.status(500).send('Internal Server Error');
//     } else if (results.length === 0) {
//       res.status(404).send('Image not found');
//     } else {
//       const imageData = results[0].image_data;
//       res.writeHead(200, { 'Content-Type': 'image/jpeg' });
//       res.end(imageData, 'binary');
//     }
//   });
// });





//get cards
app.get('/data', (req, res) => {
    const query = 'SELECT * FROM login ORDER BY points DESC'; 
  
    db.query(query, (err, results) => {
      if (err) {
       // console.error('MySQL query error:', err);
        res.status(500).send('Internal Server Error');
      } else {
        //console.log(results)
        res.json(results);
      }
    });
  });

  //submit results
  
app.post('/submit', (req, res) =>{
  //const{name} = req.body;
 // console.log(req.body.points)
  const sql = 'update login set points=? where `name` = ?';
  db.query(sql,[req.body.points,req.body.name], (err, result) =>{
     
      if(err) return res.json("Error");
      return res.json(result);
      
  })

})







  //get top 3

  app.get('/top', (req, res) => {
    const query = 'SELECT * FROM login ORDER BY points DESC LIMIT 3' 
  
    db.query(query, (err, results) => {
      if (err) {
      //  console.error('MySQL query error:', err);
        res.status(500).send('Internal Server Error');
      } else {
      //  console.log(results)
        res.json(results);
      }
    });
  });


app.listen(3002, () => {
    console.log("listening on port"+3002);
})
