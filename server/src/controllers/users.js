const {body, validationResult } = require('express-validator');

var User = require('../models/User)



app.post(
    '/signup',
    body('email').isEmail(),
    body('password').isLength({min: 6}),
    (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array() });
        }

        User.create({
            email: req.body.email,
            password: req.body.password,
        }).then(user => res.json(user));
    },
);
