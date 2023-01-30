const User = require('../model/user');

exports.user_add = ((req, res)=>{
    const newUser = new User({...req.body});
    newUser.save().then(()=>{
        res.send('New User created successfully!');
    }).catch((err)=>{
        res.status(500).send(`Internal Server Error ${err}`)
    })
})