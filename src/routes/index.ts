import express from 'express';
import resize from './api/resize';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
   return res.send('This is the main api router');
});

routes.use('/resize', resize);

export default routes;