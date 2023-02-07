import { Request, Response } from 'express';
import { userRepo } from '../repos';
import bcrypt from 'bcryptjs';
import { ERRORS } from '../constants/errors';
const jwt = require('jsonwebtoken');

type ApiResponse = Promise<Response>;

export const login = async (
  req: Request,
  res: Response
): Promise<ApiResponse> => {
  const { email, password: pswrd } = req.body;
  try {
    const user = await userRepo.findByEmail(email);

    if (user && user.email == email) {
      const isMatch = await bcrypt.compare(pswrd, user.password);

      if (!isMatch) return res.status(400).json(ERRORS.USER_NOT_FOUND);

      const payload = {
        user: {
          id: user.id,
        },
      };
      const token = await jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: 360000,
      });
      const { password, ...response } = user;
      return res.json({ ...response, token });
    }

    return res.status(400).json(ERRORS.USER_NOT_FOUND);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const register = async (
  req: Request,
  res: Response
): Promise<ApiResponse> => {
  try {
    const { email, first_name, last_name } = req.body;
    const user = await userRepo.findByEmail(email);

    if (user) return res.status(400).json(ERRORS.USER_EXIST);

    const salt = await bcrypt.genSalt(10);
    const pswrd = await bcrypt.hash(req.body.password, salt);

    const newUser = await userRepo.create({
      email,
      password: pswrd,
      first_name,
      last_name,
    });
    const payload = {
      user: {
        id: newUser.id,
      },
    };
    const token = await jwt.sign(payload, 'tokenSecret', {
      expiresIn: 360000,
    });
    const { password, ...response } = newUser;
    return res.json({ ...response, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  login,
  register,
};
