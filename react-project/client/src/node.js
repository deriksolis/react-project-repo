const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


const persons = JSON.parse(fs.readFileSync('./hard.json', 'utf-8'));


// get all people

app.get('/people', (req, res) => {
    res.send(persons);
});

// get certain people

app.get('/people/:id', (req, res) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].id == id) {
            res.send(persons[i])
        }
    }
    res.status(404).send('Unable to find id')
})

// delete

app.delete('/people/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const filteredArr = persons.filter(person => person.id !== id);
    if (filteredArr.length === people.length) {
        return res.status(404).send("Unable to find ID")
    }
    fs.writeFileSync('./hard.json', JSON.stringify(filteredArr));
    res.send(filteredArr);
})

// post

app.post('/people', (req, res) => {
    const {id, name, salary, department} = req.body;
    if (id && name && salary && department) {
        const newPerson = {
            id,
            name, 
            salary,
            department
        }
        persons.push(newPerson);
        fs.writeFileSync('./hard.json', JSON.stringify(persons));
        res.send(newPerson);
    } else {
        return res.status(422).send("Unable to add person")
    }
})

// put 

app.put('/people/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // const {ids, name, salary, department} = req.body;
    
    for(let i = 0; i < persons.length; i++) {
        if ( id === persons[i].id ) {
            persons[i] = req.body;   
            res.send(persons[i]);
            fs.writeFileSync('./hard.json', JSON.stringify(persons));     
        } 
    }
    // else {
    //     const newPerson = {
    //         id,
    //         name, 
    //         salary,
    //         department
    //     }
    //     persons.push(newPerson);
    //     fs.writeFileSync('./hard.json', JSON.stringify(persons));
    //     res.send(newPerson);
    // }
})

app.listen(3000);