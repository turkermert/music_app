const router = require("express").Router();
let User = require("../models/user.model");

// GET A USER WITH EMAIL
router.route("/getbymail").get((req, res) => {
  const email = req.body.email;
  User.find({usermail:email}).then(users => res.json(users)).catch(err => res.status(400).json("Error: "+ err))
})

// GET A USER WITH USERNAME
router.route("/getbyname").get((req, res) => {
  const username = req.body.username;
  User.find({username:username}).then(users => res.json(users)).catch(err => res.status(400).json("Error: "+ err))
})

// CREATE A NEW USER
router.route("/add").post((req, res) => {
    const usermail = req.body.usermail;
    const username = req.body.username;
    const userpassword = req.body.password;
    const token_at= req.body.created_time;
    const token = req.body.token;
    const newUser = new User({usermail,username,userpassword,token_at,token});
    newUser.save().then(() => res.json("Created new Account Thank you "+ username)).catch(err => res.status(400).json("error: " + err))
});