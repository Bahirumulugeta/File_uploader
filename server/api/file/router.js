// File controller
const { getAll, create, deleteById } = require("./controller");

// Upload file middleware
const uploadFile = require("../middleware");
const router = require("express").Router();
// Apis
router
  .route("/")
  .get(getAll)
  .post(uploadFile.single("file"), create);
router.delete("/:id", deleteById);

// Export
module.exports = router;
