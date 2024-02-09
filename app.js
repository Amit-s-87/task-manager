const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tasks = [
    {
        "id": 1,
        "title": "Create a new project",
        "description": "Create a new project using Magic",
        "completed": false
    },
    {
        "id": 2,
        "title": "Update user interface design",
        "description": "Revise the UI design based on client feedback",
        "completed": true
    },
    {

        "id": 3,
        "title": "Implement authentication system",
        "description": "Integrate authentication module for user login",
        "completed": false

    }
]


// Validation function for task data
function validateTaskData(body) {
    if (Object.keys(body).length === 0) {
        throw new Error("Request body is empty");
    }

    if (!body.title) {
        throw new Error("Task title is missing");
    }

    if (!body.description) {
        throw new Error("Task description is missing");
    }

    if (body.completed === undefined) {
        throw new Error("Task completed is missing");
    } else {
        if (typeof body.completed !== "boolean") {
            throw new Error("Task completed must be a boolean variable");
        }
    }
}



app.get("/task-manager/v1/tasks", (req, res) => {
    res.send(tasks);
});

app.get("/task-manager/v1/tasks/:id", (req, res) => {
    const id = req.params.id;
    const task = tasks.find((task) => task.id === parseInt(id));
    if (!task){
        return res.status(404).send("Task with given ID does not exist");
    }    
    res.send(task);
});

// POST endpoint for creating tasks
app.post("/task-manager/v1/tasks", (req, res) => {
    try {
        validateTaskData(req.body);

        const task = {
            "title": req.body.title,
            "description": req.body.description,
            "completed": req.body.completed
        };

        task.id = tasks.length + 1;
        tasks.push(task);
        res.status(200).send(task);
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});

// PUT endpoint for updating tasks
app.put("/task-manager/v1/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTaskData = req.body;

    try {
        // Check if task with the given ID exists
        const taskToUpdate = tasks.find(task => task.id === taskId);
        if (!taskToUpdate) {
            return res.status(404).send("Task with given ID does not exist");
        }

        // Validate the updated task data
        validateTaskData(updatedTaskData);

        // Update the task properties
        taskToUpdate.title = updatedTaskData.title;
        taskToUpdate.description = updatedTaskData.description;
        taskToUpdate.completed = updatedTaskData.completed;

        res.status(200).send(taskToUpdate);
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});

app.delete("/task-manager/v1/tasks/:id", (req, res) => {
    const id = req.params.id;
    const task = tasks.find((task) => task.id === parseInt(id));
    if (!task){
        return res.status(404).send("Task with given ID does not exist");
    }    
    const index = tasks.indexOf(task);
    tasks.splice(index,1);
    res.send(task);
});


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});

module.exports = app;