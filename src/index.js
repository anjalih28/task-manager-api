const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     return res.send("GET requests are disabled");
//   }

//   next();
// });

// app.use((req, res, next) => {
//   res.status("503").send("Maintenance!");
// });

// Automatically parse incoming json
app.use(express.json());
// Use routers
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port ", port);
});

const jwt = require("jsonwebtoken");

const dummy = async () => {
  const token = jwt.sign({ _id: "anj123$%^" }, "thisismynewcourse");
  const token1 = jwt.sign({ _id: "anj123" }, "thisismynewcourse");

  console.log("TOKEN");
  console.log(token);

  const data = jwt.verify(token1, "thisismynewcourse");
  console.log(data);
};

// dummy();

const pet = {
  name: "Esco",
  id: 123,
};

pet.toJSON = function () {
  console.log(this);
  delete this.name;
  return this;
};

// console.log(JSON.stringify(pet));

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("5ec371a9e4f43611c2031137");
  // await task.populate("owner").execPopulate();
  // console.log(task);

  const user = await User.findById("5ec370723274110d2ec8b169");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

// main();
