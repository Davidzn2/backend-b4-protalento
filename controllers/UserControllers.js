const { UserModels } = require('../models')

module.exports = {
    getUsers: (req, res) => {
        UserModels
            .getAllUsersModel()
            .then(results => res.status(201).json(results))
            .catch(err => res.status(500).json(err))
    },
    getOneUser: (req, res) => {
        let { id } = req.params
        UserModels
            .getOneUsersModel(id)
            .then(results => res.status(201).json(results))
            .catch(err => res.status(500).json(err))
    },
    createUser: (req, res, next) => {
        const { body } = req
        // console.log(body)
        UserModels
            .createUserModel(body)
            .then(result=> res.send(result))
            .catch(error => next(error))
     
    },
    getNumbers: (req, res) => {
        let numbers = req.params
        console.log(numbers)
        res.json({
            numbers
        })
    }
}