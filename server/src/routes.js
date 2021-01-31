const express = require("express")
const router = express.Router()
const bcrypt = require('bcrypt');

const Event = require("./models/Event")
const User = require("./models/User.js")

router.get('/', async (req, res) => {
    if (req.session.username) {
        res.send("you are loggen in as " + test);
    } else {
        res.send("please login");
    }
});

router.post('/register', async (req, res) => {
    let { username, password } = req.body;
    console.log("register: " + username);
    user = new User({ username, password });
    return user
        .save()
        .then(() => {
            console.log("successful")
            return res.send(user);
        })
        .catch(err => {
            console.log("err:" + err);
            return res.status(409).send(err)
        });
});

router.post('/auth', async (req, res) => {
    let { username, password } = req.body;
    console.log("auth: " + username);
    return User
        .findOne({ username })
        .then(async user => {
            if (user) {
                let match = await bcrypt.compare(password, user.password);
                if (match) {
                    console.log("successful: " + user)
                    req.session.username = username;
                    return res.send(username)
                } else {
                    console.log("user not found");
                    return res.status(409).send("")
                }
            } else {
                console.log("user not found");
                return res.status(409).send("")
            }
        })
        .catch(err => {
            console.log("err:" + err);
            return res.status(409).send(err)
        });

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


// this is dummy route to get all events
router.get('/events', async (req, res) => {
    const events = await Event.find()
    res.send(events)
});

module.exports = router
