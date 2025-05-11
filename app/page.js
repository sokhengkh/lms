'use client'
import { Button } from "@/components/ui/button"
import { toast } from "sonner";
export default function Home() {


  const handleClick = (mode) => {
    mode ? toast.success('success') : toast.error('Error');
  }

  return (
    <div>
      <p className="text-3xl text-green-700 flex justify-center items-center">Hello</p>
      <Button onClick={() => handleClick(true)}>Click Me</Button>
    </div>
  );
}
