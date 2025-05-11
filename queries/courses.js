import { Category } from "@/model/category-model"
import { User } from "@/model/user-model";
import { Testimonials } from "@/model/testimonials-model";
import { Modules } from "@/model/module-model";

export async function getCourses() {
    const Course = await Course.find({}).populate({
        path: "category",
        model: Category
    }).populate({
        path: "instructor",
        model: User
    }).populate({
        path: "testimonials",
        model: Testimonials
    }).populate({
        path: "modules",
        model: Modules
    });
    return Course;
}