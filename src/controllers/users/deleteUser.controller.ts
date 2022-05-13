import { Request, Response } from "express";
import deleteUserService from "../../services/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserService(id);
    return res.status(200).send("User successfully deleted");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ status: "Error", message: err.message });
    }
  }
};

export default deleteUserController;
