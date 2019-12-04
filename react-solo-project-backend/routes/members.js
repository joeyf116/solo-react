const express = require('express'),
  router = express.Router();
  MemberModel = require('../models/members');


router.post("/", async (req, res) => {
  const { name, dob, email, phone, datejoined } = req.body;
  const response = await MemberModel.addMember(name, dob, email, phone, datejoined);
  console.log("this response is in members route: ", response)
    res.sendStatus(200);
  
});

// router.delete("/", async (req, res) => {
//   // const { id } = req.body;
//   const response = await memberModel.removeMember(id);
//     res.sendStatus(200);
//     console.log("This response is in members route", response)
// });

module.exports = router;