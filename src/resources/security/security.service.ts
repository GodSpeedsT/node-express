import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {getByLogin} from "./admin.repository"; 

const login = async (loginData: { login: string; password: string }) => {
  const admin = await getByLogin(loginData.login);
  if (!admin) return null;

  const isMatch = await bcrypt.compare(loginData.password, admin.password);
  if (!isMatch) return null;

  const payload = { id: admin.id, login: admin.login };
  const secret = process.env.JWT_SECRET_KEY as string;
  
  const token = jwt.sign(payload, secret, { expiresIn: '24h' });

  return { token };
};

export default { login };