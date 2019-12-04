const express = require("express"),
  router = express.Router(),
  memberModel = require('../models/members');


router.get('/', async (req, res, next) => {
  const getAll = await memberModel.getAll();
  res.json(getAll).status(200);
})

// router.get('/', async (req, res, next) => {
//   const getThisMonth = await memberModel.getThisMonth();
//   res.json(getThisMonth).status(200);
//   console.log('tried it')
// })

router.post("/", async (req, res) => {
  const { name, dob, email, phone, datejoined } = req.body;
  const response = await memberModel.addMember(name, dob, email, phone, datejoined);
  if (response.command === "INSERT") {
    res.sendStatus(200);
    console.log("insert query logging")
  } else {
    res.send(`Could not add new member ${name}`);
  }
});

router.delete("/", async (req, res) => {
  const response = await memberModel.removeMember();
    res.sendStatus(200);
    console.log("this is in index", response)
});
module.exports = router;
