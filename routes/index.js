module.exports = app => {
  const citycontrol = require("../controllers/citycontroller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", citycontrol.create);

  // Retrieve all Tutorials
  router.get("/", citycontrol.findAll);

  // Retrieve all published Tutorials
  router.get("/published", citycontrol.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", citycontrol.findOne);

  // Update a Tutorial with id
  router.put("/:id", citycontrol.update);

  // Delete a Tutorial with id
  router.delete("/:id", citycontrol.delete);

  // Delete all Tutorials
  router.delete("/", citycontrol.deleteAll);

  app.use('/api/citylist', router);
};