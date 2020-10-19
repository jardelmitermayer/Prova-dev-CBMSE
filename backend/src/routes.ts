import { Router } from 'express';
import PersonController from './controllers/PersonController';
import PersonContactController from './controllers/PersonContactController';
import ContactTypeController from './controllers/ContactTypeController';

const routes = Router();

routes.get('/people', PersonController.index);
routes.get('/person/:id', PersonController.show);
routes.post('/person', PersonController.create);
routes.post('/contact', PersonContactController.create);
routes.post('/contactType', ContactTypeController.create);

export default routes;