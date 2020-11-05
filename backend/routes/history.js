const router = require("express").Router();
let History = require("../models/history.model");

// GET A HISTORY BY ID
router.route("/getHıstory").get((req, res) => {
  const history_id = req.body.id;
  History.find({code:history_id}).then(history => res.json(history)).catch(err => res.status(400).json("Error: "+ err))
})

// UPDATE A HISTORY
router.route("/addHıstory").get((req, res) => {
  const code = req.body.id;
  const musicName = req.body.musicName;
  const musics = await History.findOne({code: code});
  if (musics.length === 10) musics.shift(); 
  musics.push(musicName);
  await History.findOneAndUpdate({code: code},{Musics: musics},{new: true});
})

// CREATE A HISTORY
router.route("/add").post((req, res) => {
    const code = req.body.id;
    const musics = [];
    const newHistory = new History({code,musics});
    newHistory.save().then(() => res.json("Created the user history")).catch(err => res.status(400).json("error: " + err))
});