import express from "express";

import uploadMiddleware from "./middlewares/upload.middleware";
import uploadController from "./controllers/upload.controller";
import BooksController from "./controllers/books.controller";
import categoryController from "./controllers/category.controller";

const router = express.Router();

router.get("/books", BooksController.findAll);
router.post("/books", BooksController.add);
router.get("/books/:id", BooksController.findOne);
router.put("/books/:id", BooksController.update);
router.delete("/books/:id", BooksController.delete);

router.get("/category", categoryController.findAll);
router.post("/category", categoryController.create);
router.get("/category/:id", categoryController.findOne);
router.put("/category/:id", categoryController.update);
router.delete("/category/:id", categoryController.delete);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

export default router;
