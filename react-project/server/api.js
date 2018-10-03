const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {places} = require('./models/places');
let {contacts} = require('./models/contacts');


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }));

// post destinations

app.post('/destinations', (req, res) => {
    const {productId, name, description, price,
        landscapeType, url, days} = req.body;
    let place = new places({
        productId, 
        name,
        description,
        price,
        landscapeType, 
        url,
        days
        })
 
    place.save().then(doc => {
        res.redirect('http://localhost:3000/admin');
        console.log(doc);
    }, e => {
        res.status(400).send(e);
    })
 })

 app.post('/contacts', (req, res) => {
    const {firstName, lastName, email, work,
        description} = req.body;
    let newContact = new contacts({
        firstName, 
        lastName,
        email,
        work,
        description
        })
 
    newContact.save().then(doc => {
        res.redirect('http://localhost:3000/');
        console.log(doc);
    }, e => {
        res.status(400).send(e);
    })
 })



// // get all destinations

app.get('/destinations', (req, res) => {
    places.find().then((place) => {
        res.send(place)
    }, (e) => {
        res.status(400).send(e);
    })
})

// get all contacts 

app.get('/contacts', (req, res) => {
    contacts.find().then((contact) => {
        res.send(contact)
    }, (e) => {
        res.status(400).send(e);
    })
})


// // get certain destinations

app.get('/destinations/:id', (req, res) => {
    let id = req.params.id;
    
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('bad');
    }
    places.findById(id).then((place) => {
        if (!place) {
            return res.status(404).send('bad2');
        }
        res.send({place})
    }).catch((e) => {
        res.status(400).send(e.message);
    })
})


// // delete destinations

app.delete('/destinations/:id', (req, res) => {
    const id = req.params.id;
    places.findByIdAndDelete(id)
    .then(place => {
        if(!place) {
            return res.status(404).send("Product not found")
        }
        res.send(place)
    })
    .catch(e => res.send(e.message));
})

// // put 

app.put("/destinations/:id", (req, res) => {
    const id = req.params.id;
    const body = _.pick(req.body, [
        "productId", 
        "name",
        "description",
        "price",
        "landscapeType", 
        "url",
        "days", 
        "none"
    ]);

    places.findByIdAndUpdate(id, { $set: body }, { new: true })
      .then(data => {
        if (!data) {
          return res.send("Product not found");
        }
        data.save()
        .then(updatedData => res.send(updatedData))
      })
      .catch(e => {
        res.status(400).send(e.message);
      });
   });


app.listen(3005);