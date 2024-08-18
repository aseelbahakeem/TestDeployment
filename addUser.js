// //jshint esversion:6
// require('dotenv').config();
// const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// mongoose.connect("mongodb://localhost:27017/MyWebsiteNodeDB", { useNewUrlParser: true, useUnifiedTopology: true });

// const userSchema = new mongoose.Schema({
//         username: String,
//         password: String
// });

// const User = mongoose.model("User", userSchema);

// const username = process.env.ADMIN_USERNAME;
// const password = process.env.ADMIN_PASSWORD;

// (async () => {
//         try {
//                 const hash = await bcrypt.hash(password, saltRounds);
//                 const newUser = new User({
//                         username: username,
//                         password: hash
//                 });

//                 await newUser.save();
//                 console.log("Admin user created successfully.");
//         } catch (err) {
//                 console.log(err);
//         } finally {
//                 mongoose.connection.close();
//         }
// })();
