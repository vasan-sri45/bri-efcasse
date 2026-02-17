// utils/auth/generateToken.js
import jwt from 'jsonwebtoken';

const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000; 

const isProd = process.env.NODE_ENV === 'production';
const cookieName = isProd ? '__Host-jwt' : 'jwt'; 

const generateToken = (userId, res) => {
  const secret = process.env.JWT_SECRET_KEY; 
  if (!secret) throw new Error('JWT secret missing');

  const token = jwt.sign(
    { sub: String(userId) },          
    secret,
    {
      expiresIn: '15d',               
      issuer: process.env.JWT_ISSUER || 'my-app',
      audience: process.env.JWT_AUDIENCE || 'my-app-users',
      algorithm: 'HS256',             
    }
  );

  res.cookie(cookieName, token, {
    httpOnly: true,                   
    secure: isProd,                   
    sameSite: 'Lax',                  
    path: '/',                        
    maxAge: FIFTEEN_DAYS_MS,          
  });

  return token;
};

export default generateToken;


export const clearAuthCookie = (res) => {
  const isProd = process.env.NODE_ENV === 'production';
  const name = isProd ? '__Host-jwt' : 'jwt';
  res.clearCookie(name, { httpOnly: false, secure: isProd, sameSite: 'Lax', path: '/' });
};
