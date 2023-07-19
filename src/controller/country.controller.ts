import { NextFunction, Request, Response } from "express";
import model from "../model";
import Exception from "../exception";

export default {
  GET: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const getAll = await model
      .find()
      .catch((err) => next(new Exception(err.message, 500)));

    return res.json(getAll);
  },

  POST: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const { name, poytaxt } = req.body;
    const newCountry = new model({ name, poytaxt });

    const posted = newCountry
      .save()
      .catch((err) => next(new Exception(err.message, 500)));

    return res.json(posted);
  },

  PUT: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const { name, poytaxt } = req.body;
    const { id } = req.params;
    const update = await model
      .updateOne({ _id: id }, { name, poytaxt })
      .catch((err) => next(new Exception(err.message, 500)));

    return res.json(update);
  },

  DELETE: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const { id } = req.params;
    const deleted = await model
      .deleteOne({ _id: id })
      .catch((err) => next(new Exception(err.message, 500)));

    return res.json(deleted);
  },
};
