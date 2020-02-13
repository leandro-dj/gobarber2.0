import { Router } from 'express';

const routes = Router();
routes.get('/', (req, res) => {
  res.json({ name: 'leandro oliveira' });
});

export default routes;
