const express = require('express');
const router = express.Router();


const { ObjectId } = require('mongoose').Types;

const Employee = require('../models/employee.js');


//creating API's
//base path  http://localhost:3000/employees

// Get Api
router.get('/', (req, res)=> {
    Employee.find()
    .then(foundModels => {
        console.log('Models found successfully:', foundModels);
        // Send the found models back as a response
        res.status(200).json(foundModels);
    })
    .catch(error => {
        console.error('Error finding models:', error);
        // Send an error response if something goes wrong
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Get Single Employee API
router.get('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        Employee.findById(req.params.id)
            .then(foundEmployee => {
                if (foundEmployee) {
                    console.log('Employee found successfully:', foundEmployee);
                    res.send(foundEmployee);
                } else {
                    res.status(404).send('No record found with id ' + req.params.id);
                }
            })
            .catch(error => {
                console.error('Error finding employee by id:', error);
                res.status(500).send('Internal Server Error');
            });
    } else {
        res.status(400).send('Invalid employee id');
    }
});

// PUT Employee API
router.put('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        Employee.findByIdAndUpdate(req.params.id, req.body, { new: true }) // Pass req.body as the update data
            .then(updatedEmployee => {
                if (updatedEmployee) {
                    console.log('Employee updated successfully:', updatedEmployee);
                    res.send(updatedEmployee);
                } else {
                    res.status(404).send('No record found with id ' + req.params.id);
                }
            })
            .catch(error => {
                console.error('Error updating employee by id:', error);
                res.status(500).send('Internal Server Error');
            });
    } else {
        res.status(400).send('Invalid employee id');
    }
});


// Delete Employee API
router.delete('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        Employee.findByIdAndDelete(req.params.id)
            .then(foundEmployee => {
                if (foundEmployee) {
                    console.log('Employee Deleted successfully:', foundEmployee);
                    res.send(foundEmployee);
                } else {
                    res.status(404).send('No record found with id ' + req.params.id);
                }
            })
            .catch(error => {
                console.error('Error deleting employee by id:', error);
                res.status(500).send('Internal Server Error');
            });
    } else {
        res.status(400).send('Invalid employee id');
    }
});



// POST API
router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept
    });

    emp.save()
        .then(savedEmp => {
            console.log('Employee saved successfully:', savedEmp);
            // Send a success response back to the client
            res.status(201).json(savedEmp);
        })
        .catch(error => {
            console.error('Error saving employee:', error);
            // Send an error response if something goes wrong
            res.status(500).json({ error: 'Internal Server Error' });
        });
});


module.exports = router;