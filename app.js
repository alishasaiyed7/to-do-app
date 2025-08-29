const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let todos = []; // In-memory list (resets if server restarts)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

// Home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Add a task
app.post('/add', (req, res) => {
  todos.push(req.body.task);
  res.redirect('/');
});

// Get tasks (for debugging)
app.get('/tasks', (req, res) => {
  res.json(todos);
});

app.listen(port, () => {
  console.log(`✅ To-Do app running at http://localhost:${port}`);
});
