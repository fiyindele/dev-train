//since we have "type: 'module', in package.json"
import express from "express";
//creating an app using this express object
const app = express();
const port = 3000;

//when a client server is trying to GET at our homepage
app.get("/", (req, res) => {
  console.log("Hello world");
});

//specifying the port and the callback function
//the port
app.listen(port, () => {
  //the callback function
  console.log(`Server is running on port ${port}`);
});
