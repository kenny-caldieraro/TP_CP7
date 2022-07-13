const dotenv = require("dotenv");
dotenv.config();

const dataMapper = require("./app/dataMapper");
const Level = require("./app/models/level");
const User = require("./app/models/user");

/*
dataMapper.getAllLevels((err, levels)=>{
    console.log(err, levels)
})

Level.findAll((err, levels)=>{
    console.log(err, levels)
})
*/

// dataMapper.getOneLevel(1, (err,level)=>{
//     console.log(err,level)
// })

// Level.findById(1,(err,level)=>{
//     console.log(err,level)
// })

// User.findAll((err, users) => {
//   console.log(err, users);
// });

// User.findById(1, (err, user) => {
//   console.log(err, user);
// });

const user = new User({
  id: 4,
  email: "caldieraro16@gmail.com",
  password: "sbravaratgen",
  firstname: "kenny",
  lastname: "Caldieraro",
});

// user.insert((err, user) => {
//   console.log(err, user);
// });

// user.update((err, user) => {
//   console.log(err, user);
// });

// user.delete((err, user) => {
//   console.log(err, user);
// });
