import { Request, Response } from "express";
import updateUserService from "../../services/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, age } = req.body;
    const userUpdate = await updateUserService({
      name,
      email,
      password,
      age,
      id,
    });
    return res.status(200).json(userUpdate);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ status: "Error", message: err.message });
    }
  }
};

export default updateUserController;
