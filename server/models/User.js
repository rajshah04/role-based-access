const mongoose = require("mongoose") ;

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        accountType: {
            type: String,
            required: true,
            enum: ["Admin", "Student", "Instructor"]
        },
    }
) ;

module.exports = mongoose.model("User", userSchema) ;