const express = require('express');
const router = express.Router();


const getHome = (req, res, next) => {
    try {
        res.status(200).send('Welcome to food app');
    } catch (err) {
        res.status(500).send(err);
    }
    
}

router.get('/home', getHome);
module.exports = router;