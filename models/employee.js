import mongoose from "mongoose";
const Schema = mongoose.Schema;
import "./branch.js";

const employeeSchema = mongoose.Schema({
  emp_id: Number,
  emp_name: String,
  emp_email: String,
  emp_pw: String,
  emp_photo: String,
  emp_address: String,
  branch: {
    type: Schema.Types.ObjectId,
    ref: "Branch",
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

const Emplyoee = mongoose.model("Employee", employeeSchema);

export default Emplyoee;
