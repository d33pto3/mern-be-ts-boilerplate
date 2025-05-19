import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/user.controller";
const router = express.Router();

router
  .route("/")
  .get(getUsers)
  .post(createUser);

router
  .route("/:id")
  .get(updateUser)
  .post(deleteUser);

export default router;