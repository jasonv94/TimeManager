const express = require("express")
const Event = require("./models/Event")
const User = require("./models/User.js")
const router = express.Router()


router.get('/', async (req, res) => {
    if(req.session.userName){
        res.send("you are loggen in as " + test);
    } else {
        res.send("please login");
    }
});

router.post('/signup', async (req, res) => {
    user = new User({
        email: req.body.email,
        password: req.body.password,
    });
    await user.save();
    res.send(user);
});

router.post('/login', async (req, res) => {
    req.session.userName = 'test',
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


// this is dummy route to get all events
router.get('/events', async (req, res) => {
    const events = await Event.find()
    res.send(events)
});

module.exports = router
