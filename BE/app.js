const express = require("express");
const app = express();
const port = parseInt(process.env.PORT) || 3000;
const doctorsRouter = require("./routers/doctorsRouter");
const cors = require("cors");
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");
//const fileUpload = require('express-fileupload')

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json());
app.use(express.static("public"));
//app.use(fileUpload())

app.get("/", (req, res) => {
  res.send("ok");
});

app.use("/api/doctors", doctorsRouter);

app.use(errorsHandler);

app.use(notFound);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
