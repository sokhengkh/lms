import { getCourses } from "@/queries/courses";

export default async function Home() {
  const course = await getCourses();
  console.log(course)
  return (
    <div>
      <p className="text-3xl text-green-700 flex justify-center items-center">Hello</p>
    </div>
  );
}
