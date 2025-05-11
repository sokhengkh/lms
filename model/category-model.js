import mongoose,{Schema} from "mongoose";

const categorySchema = new Schema({
    title: {
        require: true,
        type: String
    },
    description: {
        require: false,
        type: String
    },
    thumbnail: {
        require: true,
        type: String
    },
 
});
export const Category = mongoose.models.Category ?? mongoose.model("Category", categorySchema);