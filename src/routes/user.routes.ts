import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listOneUserController from "../controllers/users/listOneUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import emailVerifyMiddleware from "../middlewares/emailVerify.middleware";

const routes = Router();

routes.post("/users", emailVerifyMiddleware, createUserController);
routes.get("/users", listUsersController);
routes.get("/users/:id", listOneUserController);
routes.patch("/users/:id", updateUserController);
routes.delete("/users/:id", deleteUserController);

export default routes;
