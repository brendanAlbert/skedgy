
const express = require("express");
// const router = express.Router()
const cors = require("cors");
const fs = require('fs')
const app = express();

app.use(cors());


app.get('/9th', (req, res) => {
    fs.readFile(`./data/grade9classes.json`, (err, json) => {
        res.json(JSON.parse(json))
    })
})





const port = process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
app.listen(port, function () {
    console.log(`server started, listening @ port ${port}`);
});









// require("rootpath")();


// const bodyParser = require("body-parser");
// const jwt = require("./_helpers/jwt");
// const errorHandler = require("./_helpers/error-handler");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// app.use(jwt());

// app.use("/users", require("./users/users.controller"));

// app.use(errorHandler);

