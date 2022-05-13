import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserCreate } from "../interfaces/users";
import * as bcrypt from "bcrypt";

const createUsersService = async ({
  name,
  email,
  age,
  password,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const hashed = await bcrypt.hash(password, 8);

  const newUser = userRepository.create({
    name,
    email,
    age,
    password: hashed,
  });
  await userRepository.save(newUser);

  return newUser;
};

export default createUsersService;
