import mongoose,{Schema} from "mongoose";

const courseSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    subtitle: {
        type: String,
        default: "subtitle"
    },
    description: {
        required: true,
        type: String
    },
    thumbnail: {
       type: String
    },
    modules: [{type: Schema.ObjectId, ref: "Modules"}],

    price: {
        required: true,
        type: Number,
        default: 0
    },
    active: {
        required: true,
        default: false,
        type: Boolean
    },
    category: {type: Schema.ObjectId, ref: "Category"},

    instructor: {type: Schema.ObjectId, ref: "User"},

    testimonials: [{ type: Schema.ObjectId, ref: "Testimonials" }],

    quizSet: {
        type: Schema.ObjectId
    },
    learning: {
        type: [String]
    },
    createdOn: {
        required: true,
        type: Date,
        default: Date.now()
    },
    modifiedOn: {
        required: true,
        type: Date,
        default: Date.now()
    }
});

export const Course = mongoose.models.Course ?? mongoose.model("Course",courseSchema);