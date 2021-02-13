import Branch from "../models/branch.js";

export const getBranches = async (req, res) => {
  try {
    const allBranches = await Branch.find().populate("bank");

    res.status(200).json(allBranches);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
