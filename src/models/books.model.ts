import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BooksSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year :{
      type: Number,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    publisher : {
      type: String,
      required: true,
    },
    cover : {
      type: [String],
      required: true,
    },
    pageCount : {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
  },
  {
    timestamps: true,
  }
);


const BooksModel = mongoose.model("Books",BooksSchema);


export default BooksModel;


