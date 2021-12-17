const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  number: { type: String, required: false },
  pincode: { type: Number, required: false },
  year: { type: String, required: false },
  month: { type: String, required: false },
  name: { type: String, required: false },
  fuel: { type: String, required: false },
  gear: { type: String, required: false },
  useofcar: { type: String, required: false },
  tpdate: { type: String, required: false },
  oddate: { type: String, required: false },
  cngkit: { type: String, required: false },
  mobile: { type: Number, required: false }
});


const Car = mongoose.model("car", carSchema);

module.exports=Car