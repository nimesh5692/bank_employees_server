import mongoose from "mongoose";
const Schema = mongoose.Schema;
import "./bank.js";

const branchSchema = mongoose.Schema({
  name: String,
  bank: {
    type: Schema.Types.ObjectId,
    ref: "Bank",
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

const Branch = mongoose.model("Branch", branchSchema);

export default Branch;
