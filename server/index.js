const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");

const app = express();
// app.use(cors());
app.use(cors(
    {
        origin: ["https://deploy-mern-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.get("/", (req, res) => {
    res.json("Hello");
})
app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));

const CONNECTION_URL = "mongodb+srv://Abdi:abdiabdi@atlascluster.o1cbn03.mongodb.net/focusWKU";

// const CONNECTION_URL = "mongodb://127.0.0.1:27017/focusWKU";
const PORT = process.env.PORT || 8080;
mongoose
  .connect(CONNECTION_URL)
  .then(() => console.log("DB is Connected..."))
  .catch((err) => {
    console.log("DB is not Connected...");
    console.log(err.message);
  });


  app.use('/focuswku/v1/auth', userRouter);
  app.use('/focuswku/v1/posts', postRouter);

app.listen(PORT, console.log(`Server Running on Port ${PORT}`));
