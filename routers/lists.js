const { Router } = require("express");

const Lists = require("../models/").appList;
const Applications = require("../models/").application;

const router = new Router();

// get all application lists

router.get("/", async (req, res, next) => {
  try {
    const lists = await Lists.findAll({ include: Applications });
    res.send(lists);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// create application list for new user

router.post("/", async (req, res, next) => {
  try {
    const { name, userId } = req.body;
    const newList = await Lists.create({
      name,
      userId,
    });
    res.send(newList);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
