import mongoose,{Schema} from "mongoose";

const testimonialsSchema = new Schema({
    content: {
        require: true,
        type: String
    },
    rating: {
        require: true,
        type: Number
    },
    courseId: {
        type: Schema.ObjectId, ref: "Course"
    },
    user: {
        type: Schema.ObjectId, ref: "User"
    },
 
});
export const Testimonials = mongoose.models.Testimonials ?? mongoose.model("Testimonials", testimonialsSchema);