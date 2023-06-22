# WorkoutList
## workouts.js
- Creates the routes for get, post, patch (update), and delete requests

## workoutModel.js
- Is the Model in the MVC framework
- Creates the MongoDB schema

## .env
- File which stores all info which you do not want to get released
- Should be placed in the .gitignore section on github

## server.js
- Runs the server
- Initialises all the requirements needed

## MongoDB
- Stores all the workout data

## Postman
- Simulates requests to the server

# Notes
- Asynchronous means running in a new thread
- Add proxy for dev environment so that backend can conenct to frontend
- Use local storage via useContext in order to prevent frequent calls to the db when objects are added, edited, or deleted
