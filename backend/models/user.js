let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    companyName: String,
    phone: String,
    LinkedInUrl: String

})

module.exports = mongoose.model("User", userSchema);