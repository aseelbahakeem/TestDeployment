// //jshint esversion:6
// const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// mongoose.connect("mongodb://localhost:27017/MyWebsiteNodeDB", { useNewUrlParser: true, useUnifiedTopology: true });

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String
// });

// const User = mongoose.model("User", userSchema);

// const username = "your_admin_username";  
// const password = "your_admin_password";  

// bcrypt.hash(password, saltRounds, function(err, hash) {
//   if (!err) {
//     const newUser = new User({
//       username: username,
//       password: hash
//     });

//     newUser.save(function(err) {
//       if (!err) {
//         console.log("Admin user created successfully.");
//         mongoose.connection.close();
//       } else {
//         console.log(err);
//       }
//     });
//   } else {
//     console.log(err);
//   }
// });
