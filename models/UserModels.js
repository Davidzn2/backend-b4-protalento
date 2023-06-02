const connection = require('../knexfile')['development']
const db = require('knex')(connection)

module.exports = {
    getAllUsersModel: () => {
        return db('users')
    },
    getOneUsersModel: (userId) => {
        return db('users').where({ "id": userId })
    },
    createUserModel: (user) => {
        console.log(user)
        return db('users').insert(user)
    },
    updateUserModel: (userId, toUpdate)=>{
        return db('users')
                .where({ "id": userId})
                .update(toUpdate)
    },
    deleteUserModel: (userId)=>{
        return db('users')
                .where({ "id": userId})
                .del()
    }
}