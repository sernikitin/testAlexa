const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    //required: true
  },
  email: {
    type: String,
   // required: true
  },
//   password: {
//     type: String,
//     // required: true
//   },
//   achievements: [],
  institutions: [],
//   transaction: [],
//   newAchv: [],
  transactions: [],
  cashFlowArray: [],
  canAddCashFlow: {
    type: Boolean,
    default: false
  },
//   lastCashFlow: {
//     type: Date,
//     default: Date.now
//   },
  date: {
    type: Date,
    default: Date.now
  },
  consecutive_login: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;