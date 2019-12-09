const express = require('express'),
  router = express.Router();
  MemberModel = require('../models/members');

router.post("/", async (req, res) => {
  const { member_id, cost, item } = req.body;
  const response = await MemberModel.addSale(member_id, cost, item);
    res.sendStatus(200);
    console.log("post for sale: ", response)
});

// router.get('/', async (req, res, next) => {
//   const getTotalSales = await MemberModel.getTotalSales();
//   res.json(getTotalSales).status(200);
// })

router.put('/update', async (req, res,) => {
  const { id, status } = req.body;
  console.log("Member ID: ", id);
  const response = await MemberModel.updateMember(id, status);
  res.sendStatus(200);
  console.log("update response is ", response);
})

  router.get('/sales', async (req, res, next) => {
    const getSales = await MemberModel.getSales();
    res.json(getSales).status(200);
  })

module.exports = router;