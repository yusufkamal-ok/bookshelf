import { Request, Response } from "express";
import BooksModel from "@/models/books.model";



export default {
  async add(req: Request, res: Response) {
    try {
      const result = await BooksModel.create(req.body);
      res.status(201).json({
        data: result,
        message: "Success create book",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create book",
      });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const result = await BooksModel.find().populate("category").exec();
      res.status(200).json({
        data: result,
        message: "Success get all books",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all books",
      });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const result = await BooksModel.findOne({
        _id: req.params.id,
      });
      res.status(200).json({
        data: result,
        message: "Success get one book",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one book",
      });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const result = await BooksModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json({
        data: result,
        message: "Success update book",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update book",
      });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const result = await BooksModel.findOneAndDelete({
        _id: req.params.id,
      });

      res.status(200).json({
        data: result,
        message: "Success delete book",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete book",
      });
    }
  },
};
