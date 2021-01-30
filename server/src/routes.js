const express = require("express")
const router = express.Router()

router.post('/signup', async (req, res) => {
    // save new user to firebase
    // ensure that the usre doesn't already exsist
    res.send('Hello World!')
});

router.post('/login', async (req, res) => {
    // verify the user creds 
    // return the user id
    res.send('Hello World!')
});

router.get('/event', async (req, res) => {
    // get user events from db using the user id
    res.send('Hello World!')
});

router.post('/event', async (req, res) => {
    let { user_id } = req.body;

    // add an event to the db using the user id
    res.send('Hello World!')
});

module.exports = router