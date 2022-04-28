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

// get one application list

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const list = await Lists.findByPk(id, { include: Applications });
    res.send(list);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// get one application list where something

router.get("/one/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const list = await Lists.findOne({
      where: { userId: id },
      include: Applications,
    });
    res.send(list);
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
