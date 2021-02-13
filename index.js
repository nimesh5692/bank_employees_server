import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import employeeRoutes from "./routes/employees.js";
import branchRoutes from "./routes/branches.js";
import login from "./routes/auth.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/employees", employeeRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/login", login);

//TODO: Link mongo DB
const CONNECTION_URL =
  "mongodb+srv://nimeshliyanage:Pissupusa001@virgocluster.dfnka.mongodb.net/bank_employees?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

mongoose.set("useFindAndModify", false);
