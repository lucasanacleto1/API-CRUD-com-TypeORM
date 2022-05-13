import { Request, Response } from "express";
import listOneUserService from "../../services/listOneUser.service";

const listOneUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await listOneUserService(id);
    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ status: "Error", message: err.message });
    }
  }
};

export default listOneUserController;
