const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {userSchema}=require("../schemas/UserSchema")

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);