const router = require("express").Router();
// sends html file based on clicked link
router.get("/exercise", (req, res) => {
  res.sendFile("exercise.html", { root: "public" });
});

router.get("/stats", (req, res) => {
  res.sendFile("stats.html", { root: "public" });
});

module.exports = router;