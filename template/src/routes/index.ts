import {Router} from 'express';
import userRoutes from "./user.routes"

const router = Router();

router.get('/', (_req, res) => {
  res.send('Welcome to the MERN Typescript backend');
})

router.use("/user", userRoutes);

export default router;