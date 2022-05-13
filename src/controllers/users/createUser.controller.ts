import { Request, Response } from "express";
import { IUserCreate } from "../../interfaces/users";
import createUsersService from "../../services/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;
    const newUser = await createUsersService({ name, age, email, password });
    return res.status(201).json(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ status: "Error", message: err.message });
    }
  }
};

export default createUserController;
