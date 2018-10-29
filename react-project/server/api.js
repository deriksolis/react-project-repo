// const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// let {ObjectID} = require('mongodb');

// let {mongoose} = require('./db/mongoose');
// let {places} = require('./models/places');
// let {contacts} = require('./models/contacts');


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }));

  const mysql = require("mysql");
  
  // app.use(cors())
  
  const connection = mysql.createConnection({
    host: "road2hire.ninja",
    user: "r2hstudent",
    password: "SbFaGzNgGIE8kfP",
    database: "dsolis"
  });
  
//   connection.connect(function(err) {
//     if (err) throw err;
//     connection.query("SELECT * FROM products", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

    // Close the connection
    // connection.end(function(){
    //     // The connection has been closed
    // });
  

  // Get all destination

  app.get('/destinations', (req, res) => {
      connection.query('SELECT * FROM products', (err, result, fields) => {
          if(err) throw err;
          res.send(result);
      })
  });

  // get all contacts 

  app.get('/contacts', (req, res) => {
    connection.query('SELECT * FROM contacts', (err, result, fields) => {
        if(err) throw err;
        res.send(result);
    })
});

  // get certain destination

  app.get('/destinations/:id', (req, res) => {
    connection.query('SELECT * FROM products WHERE id = ?', [req.params.id], (err, result, fields) => {
        if(err) throw err;
        res.send(result);
    })
});

 // delete certain destination

 app.delete('/destinations/:id', (req, res) => {
    connection.query('DELETE FROM products WHERE id = ?', [req.params.id], (err, result, fields) => {
        if(err) throw err;
        res.send('DELETE successfully');
    })
});

// insert destination

app.post('/destinations', (req, res) => {
    const {title,
         description, 
         price, 
         landscapeType, 
         url, 
         days} = req.body;
    connection.query( `INSERT INTO products (title, description, price, landscapeType, url, days) VALUES ("?", "?", "?", "?", "?", "?")` , [title, description, price, landscapeType, url, days] ,(err, result, fields) => {
        if(err) throw err;
        res.redirect('http://localhost:3000/admin');
    })
});

// add contact 

app.post('/contacts', (req, res) => {
    const {firstName,
         lastName, 
         email, 
         work, 
         description} = req.body;
    connection.query( `INSERT INTO contacts (firstName, lastName, email, work, description) VALUES ("?", "?", "?", "?", "?")`, [firstName, lastName, email, work], (err, result, fields, description) => {
        if(err) throw err;
        res.redirect('http://localhost:3000/contact');
    })
});

// edit destination

app.put('/destinations/:id', (req, res) => {
    const {title,
         description, 
         price, 
         landscapeType, 
         url, 
         days} = req.body;
    connection.query( `UPDATE products SET title="?", description="?", price="?", landscapeType="?", url="?", days="?" WHERE id=?` , [title, description, price, landscapeType, url, days, req.params.id], (err, result, fields) => {
        if(err) throw err;
        res.redirect('http://localhost:3000/admin');
    })
});

app.listen(3005, () => console.log('helloo'));


















// post destinations

// app.post('/destinations', (req, res) => {
//     const {productId, name, description, price,
//         landscapeType, url, days} = req.body;
//     let place = new places({
//         productId, 
//         name,
//         description,
//         price,
//         landscapeType, 
//         url,
//         days
//         })
 
//     place.save().then(doc => {
//         res.redirect('http://localhost:3000/admin');
//         console.log(doc);
//     }, e => {
//         res.status(400).send(e);
//     })
//  })

//  app.post('/contacts', (req, res) => {
//     const {firstName, lastName, email, work,
//         description} = req.body;
//     let newContact = new contacts({
//         firstName, 
//         lastName,
//         email,
//         work,
//         description
//         })
 
//     newContact.save().then(doc => {
//         res.redirect('http://localhost:3000/');
//         console.log(doc);
//     }, e => {
//         res.status(400).send(e);
//     })
//  })



// // // get all destinations

// app.get('/destinations', (req, res) => {
//     places.find().then((place) => {
//         res.send(place)
//     }, (e) => {
//         res.status(400).send(e);
//     })
// })

// // get all contacts 

// app.get('/contacts', (req, res) => {
//     contacts.find().then((contact) => {
//         res.send(contact)
//     }, (e) => {
//         res.status(400).send(e);
//     })
// })


// // // get certain destinations

// app.get('/destinations/:id', (req, res) => {
//     let id = req.params.id;
    
//     if (!ObjectID.isValid(id)) {
//         return res.status(404).send('bad');
//     }
//     places.findById(id).then((place) => {
//         if (!place) {
//             return res.status(404).send('bad2');
//         }
//         res.send({place})
//     }).catch((e) => {
//         res.status(400).send(e.message);
//     })
// })


// // // delete destinations

// app.delete('/destinations/:id', (req, res) => {
//     const id = req.params.id;
//     places.findByIdAndDelete(id)
//     .then(place => {
//         if(!place) {
//             return res.status(404).send("Product not found")
//         }
//         res.send(place)
//     })
//     .catch(e => res.send(e.message));
// })

// // // put 

// app.put("/destinations/:id", (req, res) => {
//     const id = req.params.id;
//     const body = _.pick(req.body, [
//         "productId", 
//         "name",
//         "description",
//         "price",
//         "landscapeType", 
//         "url",
//         "days", 
//         "none"
//     ]);

//     places.findByIdAndUpdate(id, { $set: body }, { new: true })
//       .then(data => {
//         if (!data) {
//           return res.send("Product not found");
//         }
//         data.save()
//         .then(updatedData => res.send(updatedData))
//       })
//       .catch(e => {
//         res.status(400).send(e.message);
//       });
//    });


// app.listen(3005);