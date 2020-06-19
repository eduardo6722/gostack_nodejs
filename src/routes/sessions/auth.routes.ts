import { Router } from 'express';
import { AuthController } from '../../controllers';

const authRouter = Router();

authRouter.post('/', AuthController.auth);

export default authRouter;
