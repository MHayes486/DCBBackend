// dependencies
const mongoose = require("mongoose");
const schema = mongoose.Schema;
require("mongoose-type-email");
const Utils = require("./../Utils");

// schema
const apptSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    dentist: {
      type: userID,
      required: true,
    },
    patient: {
      type: userID,
      required: false,
    }
  },
  { timestamps: true }
);


// create model (mongoose)
const apptModel = mongoose.model("Appointment", apptSchema);

//export
module.exports = apptModel;
