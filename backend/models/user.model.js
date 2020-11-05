const mongoose = require("mongoose");
const uuid = require("node-uuid");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  usermail:{
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username:{
    type: String,
    required: true,
  },
  userpassword:{
    type: String,
    required: true,
  },
  token_at:{
    type: Date,
    required: true,
  },history_id:{
    type: String,
    default: uuid.v4
  }
},{
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;