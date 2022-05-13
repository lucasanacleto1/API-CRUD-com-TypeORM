import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const emailVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const userEmail = users.find((user) => user!.email === email);

  if (userEmail) {
    return res
      .status(400)
      .json({
        status: "Error",
        message: "This email has already been registered",
      });
  }

  next();
};

export default emailVerifyMiddleware;
