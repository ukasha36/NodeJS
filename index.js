import express from "express";
import user from "./user/controller/index.js"
import mongoose from "./db/index.js";


const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log("Server is running on 3000");
});


// Database connection 

mongoose.connection.on("open" , () => {
  console.log("Database connected");
})

mongoose.connection.on("error" , (error) => {
  console.log(" Databse error --> " , error);
})

console.log("hello");

// Middle ware request

app.use("/", (req, res, next) => {
  // console.log("Middle ware")

  console.log("Reuest ---> ", req.originalUrl);
  next();
  //
});

app.get("/", (req, res) => {
  res.send(" pehla response agya");
});
app.get("/users", (req, res) => {
  res.send({ name: "Ukasha" });
});

app.use("/api", user);
