import express from "express";
import "reflect-metadata";
import routes from "./routes/user.routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log(`Server started on port ${PORT}`);
});
