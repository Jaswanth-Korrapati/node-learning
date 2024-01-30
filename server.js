const express= require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const app=express();
const mongoose = require("mongoose");

app.use(express.json());

app.use("/users",userRouter);
app.use("/note",noteRouter);


mongoose.connect("mongodb://127.0.0.1:27017/API", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(4000, () => {
      console.log("Server started on port no: 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
  
app.get('/', (req, res) => {
  res.json({"message": "Hello Crud Node Express"});
});



