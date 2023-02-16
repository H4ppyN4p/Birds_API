const express = require("express");
const app = express();

const birds = ["Mockinjay", "Crow", "Raven"]

app.get("/birds", (req, res) => {
    res.send( { birds  } )
});


app.get("/birds/:id", (req, res) => {

    let bird = birds[ parseInt(req.params.id) - 1]

    res.send({ 
        bird
    });

}) 

app.listen(8080);