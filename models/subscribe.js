const mongoose = require("mongoose");

const subscribeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Enforce uniqueness on the email field
  },
});

subscribeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

subscribeSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("subscribe", subscribeSchema);
