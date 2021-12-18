const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  selectedPlan: { type: String, required: false },
  mobile: { type: Number, required: false },
  premium: { type: Number, required: false },
  paCover: { type: Number, required: false },
  ncbDiscountAmount: { type: Number, required: false },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
