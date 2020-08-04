const router = require("express").Router();
const Workout = require("../models/Workout.js");

// create workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch (err => {
      res.status(400).json(err);
    })
});

// update workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    { _id: params.id }, 
    { $push: { exercises: body }}
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch (err => {
      res.status(400).json(err);
    })
});

// retrieve workout
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// retrieve workouts in range
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;