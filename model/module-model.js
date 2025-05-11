import mongoose,{Schema} from "mongoose";

const modulesSchema = new Schema({
    title: {
        require: true,
        type: String
    },
    description: {
        require: false,
        type: String
    },
    status: {
        require: true,
        type: String
    },
    slug: {
        require: true,
        type: String
    },
    course: {
        require: true,
        type: String
    },
    lessonIds: {
        require: true,
        type: [String]
    },
    duration: {
        require: true,
        type: Number
    },
 
});
export const Modules = mongoose.models.Modules ?? mongoose.model("Modules", modulesSchema);