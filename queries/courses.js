import { Category } from "@/model/category-model"
import { Course } from "@/model/course-model";
import { Modules } from "@/model/module-model";
import { Testimonials } from "@/model/testimonials-model";
import { User } from "@/model/user-model";
import { replaceMongoIdInArray } from "@/lib/convertData";

export async function getCourseList() {
    const courses = await Course.find({}).select(["title","subtitle","thumbnail","modules","price","category","instructor"]).populate({
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
    }).lean();
    return replaceMongoIdInArray(courses);
}