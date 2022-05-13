import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUpdateUser, IUserCreate } from "../interfaces/users";
import * as bcrypt from "bcrypt";

const updateUserService = async ({
  id,
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const user = users.find((user) => user!.id === id);

  if (!user) {
    throw new Error("User id not found");
  }

  const hashed = await bcrypt.hash(password, 8);

  const updateUser = {
    name: name || user.name,
    email: email || user.email,
    password: hashed || user.password,
    age: age || user.age,
    updated_at: new Date(),
  };

  await userRepository.update(
    {
      id: id,
    },
    updateUser
  );

  return await userRepository.findOne({
    where: {
      id,
    },
  });
};

export default updateUserService;
