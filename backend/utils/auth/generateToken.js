// // utils/auth/generateToken.js
// import jwt from 'jsonwebtoken';
// import { getAuthCookieName, getAuthCookieOptions } from './cookies.js';

// const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000;

// const generateToken = (userId, res) => {
//   const secret = process.env.JWT_SECRET_KEY;
//   if (!secret) throw new Error('JWT secret missing');

//   const token = jwt.sign(
//     {
//     sub: String(userId),
//     role: user.role,
//     source: user.role
//   },
//     secret,
//     {
//       expiresIn: '15d',
//       issuer: process.env.JWT_ISSUER || 'my-app',
//       audience: process.env.JWT_AUDIENCE || 'my-app-users',
//       algorithm: 'HS256',
//     }
//   );

//   const name = getAuthCookieName();
//   const opts = getAuthCookieOptions();
//   res.cookie(name, token, { ...opts, maxAge: FIFTEEN_DAYS_MS });

//   return token;
// };

// export default generateToken;

// export const clearAuthCookie = (res) => {
//   const name = getAuthCookieName();
//   const opts = getAuthCookieOptions();
//   res.clearCookie(name, opts); // same name + scope attributes as set
// };
