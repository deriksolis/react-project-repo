const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {places} = require('./models/places');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// post destinations

app.post('/destinations', (req, res) => {
    const {productId, name, description, price,
        landscapeType, url, days, none} = req.body;
    let place = new places({
        productId, 
        name,
        description,
        price,
        landscapeType, 
        url,
        days, 
        none 
        })
 
    place.save().then(doc => {
        res.send(doc)
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
    places.findByIdAndRemove(id)
    .then(place => {
        if(!place) {
            return res.status(404).send("Product not found")
        }
        res.send(place)
    })
    .catch(e => res.send(e.message));
})

// // put 

// app.put('/people/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     // const {ids, name, salary, department} = req.body;
    
//     for(let i = 0; i < persons.length; i++) {
//         if ( id === persons[i].id ) {
//             persons[i] = req.body;   
//             res.send(persons[i]);
//             fs.writeFileSync('../client/public/products.json', JSON.stringify(persons));     
//         } 
//     }
//     // else {
//     //     const newPerson = {
//     //         id,
//     //         name, 
//     //         salary,
//     //         department
//     //     }
//     //     persons.push(newPerson);
//     //     fs.writeFileSync('./hard.json', JSON.stringify(persons));
//     //     res.send(newPerson);
//     // }
// })

app.listen(3005);