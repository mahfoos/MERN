const express = require('express');
const mangoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/soccerRoutes');
const cors = require('cors');



const app = express();
const PORT = 4000;

// mongo connection
mangoose.Promise = global.Promise;
mangoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors setup
app.use(cors());

routes(app);

app.get('/', (req, res) => {
    res.send('Our Scooer Application is running')
})

app.listen(PORT, () => {
    console.log("Your Soccer server is running on port 4000");
})