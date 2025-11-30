import prisma from '../lib/prisma.js';
import { AuthError } from '../lib/errorClasses.js';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      }
    });

    if (!user) throw new AuthError("user with this email not found", 401);

    const passMatch = await bcrypt.compare(password, user.password_hash);
    
    if (!passMatch) throw new AuthError("Password does not match", 401);
    
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof AuthError) {
      res.status(error.errorCode).json(error.message);
    } 
  }
}
