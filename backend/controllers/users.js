
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const getAll = async (req, res) => {
    console.log('comienzo getall')
    
    const result = await mongodb.getDb().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });

};
const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};
const createUser = async (req, res) => {
   //swagger.tags=['users]
    const user = {
        email: req.body.email,
        userName: req.body.userName,
        name: req.body.name,
        ipaddress: req.body.ipaddress
    };
    const response = await mongodb.getDb().db.collection('users').insertOne(user);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'some error occurred while uploading the user');
    }  
    
};

const updateUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const user = {
        userName: req.body.userName,
        email: req.body.email,
        name: req.body.name,
        ipaddress: req.body.ipaddress,
    };
    const response = await mongodb.getDb().db.collection('users').replaceOne({_id: userId}, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'some error occurred while uploading the user');
    }  
    
};

const deleteUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db.collection('users').deleteOne({ _id: userId },);
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'some error occurred while uploading the user');
    }  
    
};
module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser

};