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
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// delete all applications

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const delApp = await Applications.findByPk(id);
    if (delApp) {
      await delApp.destroy();
    }
    res.sendStatus(200);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// edit an application

router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const { status } = req.body;
    const patchApp = await Applications.findByPk(id);
    if (patchApp) {
      await patchApp.update({ status });
    }
    res.sendStatus(200);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
