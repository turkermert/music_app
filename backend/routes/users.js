const router = require("express").Router();
let User = require("../models/user.model");

// GET A USER WITH EMAIL
router.route("/mail").get((req, res) => {
  const email = req.body.email;
  User.find({usermail:email}).then(users => res.json(users)).catch(err => res.status(400).json("Error: "+ err))
})

// CREATE A NEW USER
router.route("/add").post((req, res) => {
    const usermail = req.body.usermail;
    const username = req.body.username;
    const userpassword = req.body.password;
    const token_at= req.body.created_time;
    
    const newUser = new User({usermail,username,userpassword,token_at});
    newUser.save().then(() => res.json("Created new Account Thank you "+ username)).catch(err => res.status(400).json("error: " + err))
});