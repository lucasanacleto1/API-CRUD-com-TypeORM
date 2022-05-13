import { Request, Response } from "express";
import listUsersService from "../../services/listUsers.service";

const listUsersController = async (req: Request, res: Response) => {
  try {
    const userList = await listUsersService();
    return res.status(200).json(userList);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ status: "Error", message: err.message });
    }
  }
};

export default listUsersController;
