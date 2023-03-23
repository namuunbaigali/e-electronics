import express from "express";
import verifyToken from "../middlewares/verifyToken";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  loginUser,
  updateUser,
} from "../services/usersService";

const usersRouter = express.Router();

usersRouter.get("/", verifyToken, async (req, res) => {
  console.log("user is:", req.user);
  res.json(await getUsers());
});

usersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getUserById(id));
});

usersRouter.post("/", async (req, res) => {
  const user = req.body;
  res.json(await createUser(user));
});

usersRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  res.json(await updateUser(id, user));
});

usersRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteUser(id));
});

export default usersRouter;
