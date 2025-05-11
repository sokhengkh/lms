import mongoose,{Schema} from "mongoose";

const courseSchema = new Schema({
    title: {
        require: true,
        type: String
    },
    subtitle: {
        require: true,
        type: String
    },
    description: {
        require: true,
        type: String
    },
    thumbnail: {
        require: true,
        type: String
    },
    modules: {
        require: true,
        type: [Schema.ObjectId]
    },
    price: {
        require: true,
        type: Number
    },
    active: {
        require: true,
        type: Boolean
    },
    category: {
        type: Schema.ObjectId, ref: "Category"
    },
    instructor: {
        type: Schema.ObjectId, ref: "User"
    },
    testimonials: [{ type: Schema.ObjectId, ref: "Testimonials" }],
    quizSet: {
        require: true,
        type: Schema.ObjectId
    },
    learning: {
        require: true,
        type: [String]
    },
    createdOn: {
        require: true,
        type: Date
    },
    modifiedOn: {
        require: true,
        type: Date
    }
});
export const Course = mongoose.models.Course ?? mongoose.model("Course", courseSchema);