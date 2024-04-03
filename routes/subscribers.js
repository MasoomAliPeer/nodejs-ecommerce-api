const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const router = express.Router();

const Subscribe = require("../models/subscribe");

// router.get("/", async (req, res) => {
//   const userList = await User.find().select("-passwordHash");

//   if (!userList) {
//     res.status(500).json({ success: false });
//   }
//   res.send(userList);
// });

// router.get("/:id", async (req, res) => {
//   const user = await User.findById(req.params.id).select("-passwordHash");

//   if (!user) {
//     res.status(500).json({
//       success: false,
//       message: "The user with the given ID not exists",
//     });
//   }
//   res.status(200).send(user);
// });

router.post("/register", async (req, res) => {
  let subscribe = new Subscribe({
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
  });

  subscribe = await subscribe.save();

  if (!subscribe) return res.status(404).send("Subscribe cannot be created");
  res.send(subscribe);
});

// router.delete("/:id", (req, res) => {
//   User.findByIdAndRemove(req.params.id)
//     .then((user) => {
//       if (user) {
//         return res
//           .status(200)
//           .json({ success: true, message: "User deleted successfully" });
//       } else {
//         return res
//           .status(404)
//           .json({ success: false, message: "User cannot find" });
//       }
//     })
//     .catch((err) => {
//       return res.status(400).json({ success: false, error: err });
//     });
// });

// router.get("/get/count", async (req, res) => {
//   const userCount = await User.countDocuments((count) => count);
//   if (!userCount) {
//     res.status(500), json({ success: false });
//   }
//   res.status(200).send({
//     userCount: userCount,
//   });
// });

module.exports = router;
