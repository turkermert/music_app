const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const historySchema = new Schema({
    code: { type: String, required: true},
    Musics: [{
      type: String,
}],
    timestamps: true,
});

const History = mongoose.model("Exercise", historySchema);

module.exports = History;