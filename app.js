const express = require('express');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const tasks = [
  {
    id: 1,
    title: "Complete Express tutorial",
    done: false
  },
  {
    id: 2,
    title: "Build Task API",
    done: true
  },
  {
    id: 3,
    title: "Commit project to GitHub",
    done: false
  }
];

app.get('/', (req, res) => {
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints:["/tasks"]
  })
});

app.get('/health',(req,res)=>{
  res.json({
    status: "OK"
  })
});

app.get('/tasks',(req,res)=>{
  res.json(tasks)
});

app.get('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({
      error: `Task ${id} not found`
    });
  }

  res.json(task);
});


app.post('/tasks', (req, res) => {
  const { title } = req.body;

  // Validation
  if (!title || title.trim() === "") {
    return res.status(400).json({
      error: "Title is required"
    });
  }

  const newTask = {
    id: tasks.length + 1,
    title: title,
    done: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({
      error: `Task ${id} not found`
    });
  }

  const { title, done } = req.body;

  // Validate request body
  if (title === undefined && done === undefined) {
    return res.status(400).json({
      error: "Nothing to update"
    });
  }

  if (title !== undefined) {
    if (title.trim() === "") {
      return res.status(400).json({
        error: "Title cannot be empty"
      });
    }
    task.title = title;
  }

  if (done !== undefined) {
    task.done = done;
  }

  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: `Task ${id} not found`
    });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});