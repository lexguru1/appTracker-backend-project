const { Router } = require("express");

const Applications = require("../models/").application;

const router = new Router();

// get all applications

router.get("/", async (req, res, next) => {
  try {
    const applications = await Applications.findAll();
    res.send(applications);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// create application

router.post("/", async (req, res, next) => {
  try {
    const { company, position, status, jd, appListId } = req.body;
    const newApplication = await Applications.create({
      company,
      position,
      status,
      jd,
      appListId,
    });
    res.send(newApplication);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
