const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const Routes = require('./routes');

app.use(bodyParser.urlencoded({
    extended: false
 }));

app.use(bodyParser.json());

app.use('/users', Routes.UserRoutes);
app.use('/api', Routes.ApiRoutes);


app.listen(8080, () => {
    console.log('Server up on port 8080')
})