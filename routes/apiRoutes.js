var db = require("../models");

module.exports = function (app) {

    // API get's last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // adds new workout to our DB
    app.post("/api/workouts", async (req, res) => {
        try {
            const response = await db.Workout.create({ type: "workout" })
            res.json(response);
        }
        catch (err) {
            console.log("error occurred creating a workout: ", err)
        }
    })

    // creating new workout
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        console.log(body, params)
        const workoutId = params.id;
        let savedExercises = [];

        // prints all saved workouts
        db.Workout.find({ _id: workoutId })
            .then(dbWorkout => {
                console.log(dbWorkout)
                savedExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...savedExercises, body]
                console.log(allExercises)
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            });
        // update current workout code
        function updateWorkout(exercises) {
            db.Workout.findByIdAndUpdate(workoutId, { exercises: exercises }, function (err, doc) {
                if (err) {
                    console.log(err)
                }
            })
        }
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};