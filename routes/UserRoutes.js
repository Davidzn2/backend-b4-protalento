let express = require('express')
let router = express.Router()
let controllers = require('../controllers')

router.use('/static', express.static('views/public'))


// PARA PASAR QUERY DATOS SE USA ?dato1=7&dato2=2
router.get('/', controllers.UserControllers.getUsers)
router.get('/:id',controllers.UserControllers.getOneUser)
router.post('/', controllers.UserControllers.createUser)
router.delete('/:id', controllers.UserControllers.deleteUser)
router.put('/:id', controllers.UserControllers.updateUser)
// donde esta el simbolo : eso se va a reemplazar
//  por lo que tenga la URL y eso es lo que llamamos params 
router.get('/ejemplo/:number', controllers.UserControllers.getNumbers)

module.exports = router