import express from "express";

import { getEmployees, createEmployees } from "../controllers/employees.js";

const router = express.Router();

router.get("/", getEmployees);
router.post("/", createEmployees);

export default router;
