const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const upload = require("express-fileupload");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload());

app.use(require("./routes/index"));

mongoose
  .connect(
    "mongodb+srv://shamsadov:121314qq@cluster0.8m6ff.mongodb.net/Films",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Подключение к МонгоДБ");
  })
  .catch((e) => {
    console.log(e.message);
  });
app.listen(4030, () => {
  console.log("Подключение к локальному серверу");
});
