import mongoose from "mongoose";

const bankSchema = mongoose.Schema({
  name: String,
});

const Bank = mongoose.model("Bank", bankSchema);

export default Bank;
