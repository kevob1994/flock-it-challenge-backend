import { Request, Response } from 'express';

type ApiResponse = Promise<Response>;

export const getInfo = async (req: Request, res: Response): Promise<ApiResponse> => {
  try {
    return res.json(req.user);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  getInfo,
};
