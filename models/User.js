// dependencies
const mongoose = require("mongoose");
const schema = mongoose.Schema;
require("mongoose-type-email");
const Utils = require("./../Utils");

// schema
const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      required: true,
    },
    dOB: {
      type: Date,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    accessLevel: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//hash password
userSchema.pre("save", function (next) {
  //check if password is present and is modifed
  if (this.password && this.isModified()) {
    //replace original password with new HASHED password
    this.password = Utils.hashPassword(this.password);
  }
  //continue
  next();
});

// create model (mongoose)
const userModel = mongoose.model("User", userSchema);

//export
module.exports = userModel;
