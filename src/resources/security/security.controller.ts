import { Request, Response } from 'express';
import securityService from './security.service';

const login = async (req: Request, res: Response) => {
  const { login, password } = req.body;

  const result = await securityService.login({ login, password });
  if (!result) {
    return res.status(401).json({ message: 'Invalid login or password' });
  }

  return res.json({ token: result.token });
};

export default { login };