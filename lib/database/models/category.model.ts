import { Schema, model, models } from "mongoose";
import { Document } from "postcss";

export interface Category extends Document {
  _id: string;
  name: string;
}
const CategorySchema = new Schema({
    name: {type: String, required: true, unique: true},
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
