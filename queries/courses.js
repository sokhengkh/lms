import { Course } from "@/model/course-model";
import { Category } from "@/model/category-model"
import { User } from "@/model/user-model";
import { Testimonials } from "@/model/testimonials-model";

export async function getCourses() {
    const course = await Course.find({}).populate({
        path: "category",
        model: Category
    }).populate({
        path: "instructor",
        model: User
    }).populate({
        path: "testimonials",
        model: Testimonials
    });
    return course;
}