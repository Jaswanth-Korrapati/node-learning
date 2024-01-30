const express= require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const productTypesRoutes=require("./routes/productTypesRoutes");
const brandNameRoutes=require("./routes/brandNameRoutes");
const productDetailsRoutes=require("./routes/productDetailsRoutes");

const app=express();
const mongoose = require("mongoose");

app.use(express.json());

app.use("/users",userRouter);
app.use("/note",noteRouter);

app.use("/product-types",productTypesRoutes);
app.use("/brand-name",brandNameRoutes);
app.use('/product-details', productDetailsRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/Accenture", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});





