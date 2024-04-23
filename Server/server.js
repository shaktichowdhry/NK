import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import HttpError from "./admin/models/httpErrorModel.js";
import categoriesRoutes from "./admin/routes/categoryRoutes.js";
import productRoutes from "./admin/routes/productRoutes.js";

const app = express();
const PORT = process.env.SERVER_PORT || 5500;

// middleware before reaching routes
app.use(bodyParser.json());

// all routes
app.use("/admin/api/categories", categoriesRoutes);
app.use("/admin/api/products", productRoutes);

// app.get("/", (req, res) => {
//   // res.send('<h1>Welcome to NK Server</h1>');
//   res.json({ message: "Welcome to NK Server" });
// });

// handle unknown route
app.use((req, res, next) => {
  throw new HttpError("Could not find this route", 404);
});

// custom error handler
app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(err.code || 5000).json({
    message: err.message || "An unknown error occurred",
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
