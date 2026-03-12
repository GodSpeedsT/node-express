import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getById } from '../resources/security/admin.repository';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if (req.path === '/' || req.path === '/login') {
    return next();
  }

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1] as string;

  try {
    const payload = (jwt.verify(token, process.env.JWT_SECRET_KEY as string) as unknown) as {
      id: string;
      login: string;
    };

    const userExists = await getById(payload.id);
    if (!userExists) {
      return res.status(403).json({ message: 'Forbidden: User not found' });
    }

    next();
  } catch {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
  return null;
};
