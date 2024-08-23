import { addStudent } from "@/actions/actions";
import Image from "next/image";

export default function Home() {
  return (
   <div>
      <form action={addStudent}>

      <button >add data</button>
      </form>
   </div>
  );
}
