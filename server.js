const express = require("express");
const cors = require("cors");
//will create an express app
const app = express();

const PORT = process.env.PORT || 3000;

app.use(
    cors({ origin: "*" })
);
app.use(express.json());
//http://localhost:3000/api/products
app.get('/api/products', function(req, res, next) {
    res.json({ status: "RUNNING", topic: "xxx/xxx/xxx Simple Node API" })
});

//http://localhost:3000/api/random
app.post('/api/random', function(req, res, next) {

    if (req.body.mode == "start") {
        //we can write the functionality what all required 
        res.json({ msg: "START Sending Random data" })
    }
    if (req.body.mode == "stop") {
        res.json({ msg: "STOP Sending Random data" })
    }
    res.json({ msg: 'Command not Nound' })
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});