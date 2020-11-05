const router = require("express").Router();
let User = require("../models/user.model");


router.route("/getMail").get((req, res) => {
  const email = req.body.email;
  User.find({usermail:email}).then(users => res.json(users))
})