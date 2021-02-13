import Employee from "../models/employee.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const email = req.body.emp_email;
  const pass = req.body.emp_pw;

  const user = await Employee.findOne({ emp_email: email });

  if (user) {
    /**User exists */

    await bcrypt.compare(pass, user.emp_pw).then((result) => {
      if (result) {
        /**Password matches */

        res.status(200).json(user);
      } else {
        /**Password doesn't match */

        console.log(`Invalid username or password!`);
      }
    });
  } else {
    /**Wrong email */

    console.log(`Invalid username or password!`);
  }
};
