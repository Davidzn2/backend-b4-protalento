
module.exports = {
    getUsers: (req, res) => {
        let user = req.query
        console.log(user)
        res.json({
            username: user
        })
    },
    createUser: (req, res) => {
        const { body } = req
        console.log(body.password)
        res.status(201).json(body)
    },
    getNumbers: (req, res) => {
        let numbers = req.params
        console.log(numbers)
        res.json({
            numbers
        })
    }
}