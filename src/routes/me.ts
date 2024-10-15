import { Router } from 'express';
import * as controller from '../controllers/me';
import sessionValidator from '../middlewares/session-validator';

const router = Router({ mergeParams: true });

router.get('/', sessionValidator, controller.getMe);

export default router;
