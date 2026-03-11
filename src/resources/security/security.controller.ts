import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import adminRepo from '../security/admin.repository';
const login = async (loginData: { login: string; password: any }) => {
  const admin = await adminRepo.getByLogin(loginData.login);
  if (!admin) return null;

  const isPasswordMatch = await bcrypt.compare(loginData.password, admin.password);
  if (!isPasswordMatch) return null;

  const payload = { id: admin.id, login: admin.login };
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY as string, { expiresIn: '24h' });

  return { token };
};