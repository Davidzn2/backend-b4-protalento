let express=require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.json({
        nombre: 'Dayssi Johanna',
        apellido: 'Pésellin'
    })
})

module.exports = router