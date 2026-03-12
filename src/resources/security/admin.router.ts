import { Router } from 'express';
import {create} from './admin.repository';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const admin = await create(req.body);
    res.status(201).json({ id: admin.id, login: admin.login, name: admin.name }); 
  } catch (error) {
    console.error("!!! PRISMA ERROR:", error); 
    res.status(400).json({ message: 'Error creating user', error }); 
  }
});

export default router;