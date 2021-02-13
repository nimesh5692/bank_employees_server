import Employee from "../models/employee.js";
import Bank from "../models/bank.js";
import bcrypt from "bcrypt";

export const getEmployees = async (req, res) => {
  try {
    const allEmployees = await Employee.find()
      .populate({
        path: "branch",
        populate: {
          path: "bank",
          select: "name",
        },
      })
      .exec();

    res.status(200).json(allEmployees);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createEmployees = async (req, res) => {
  const saltRounds = 10;
  let employeeData = {};

  await bcrypt.hash(req.body.emp_pw, saltRounds).then((hash) => {
    employeeData = {
      emp_name: req.body.emp_name,
      emp_email: req.body.emp_email,
      emp_pw: hash,
      emp_photo: req.body.emp_photo,
      emp_address: req.body.emp_address,
      branch: req.body.branch,
    };
  });

  const newEmployee = new Employee(employeeData);

  try {
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};
