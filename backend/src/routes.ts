import { Router } from 'express';
import PersonController from './controllers/PersonController';

const routes = Router();

routes.post('/person', PersonController.create);

export default routes;