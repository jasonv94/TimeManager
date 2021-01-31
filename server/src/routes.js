const express = require("express")
const router = express.Router()
const bcrypt = require('bcrypt');

const Event = require("./models/Event")
const User = require("./models/User.js")

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
                    console.log("successful: " + username)
                    req.session.username = username;
                    req.session.id = username.id;
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
});

router.post('/event', async (req, res) => {
    let{user_id} = req.session.id;
    let {title, allDay, start, end, url, backgroundColor, borderColor, textColor } = req.body;
    event = new Event({user_id, title, allDay, start, end, url, backgroundColor, borderColor, textColor});
    return event
        .save()
        .then(() => {
            console.log("id: " + req.session.id)
            return res.send(event);
        })
        .catch(err => {
            console.log("err:" + err);
            return res.status(409).send(err)
        });
    // add an event to the db using the user id
});


// this is dummy route to get all events
router.get('/events', async (req, res) => {
    const events = await Event.find()
    res.send(events)
});

module.exports = router
