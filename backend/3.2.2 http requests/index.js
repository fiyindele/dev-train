import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>This is Home.</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/fiyin", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/fiyin", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/fiyin", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
