import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const listOneUserService = async (id: string) => {
  console.log(id);
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const user = users.find((user) => user!.id === id);

  if (!user) {
    throw new Error("User id does not exists");
  }

  return user;
};

export default listOneUserService;
