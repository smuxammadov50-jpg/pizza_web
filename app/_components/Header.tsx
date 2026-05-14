import Link from "next/link";
import { LiaRubleSignSolid } from "react-icons/lia";
import { SlBasket } from "react-icons/sl";
export default function Header() {
  return (
    <header className="  sticky top-0 z-50 w-full border-b bg-white bg-opacity-80 ">
      <div className=" position-relative max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <img src="/rasm1.png" alt="" />
        </div>

<Link href={"/korzina"}>

        <button  className=" position-absolute top-4 left-5 w-[150px] flex justify-between items-center h-[40px] pl-8  pr-8 bg-orange-600 rounded-[30px] text-white hover:bg-orange-500 text-sm  ">
          <div className="flex items-center justify-around">
            520 <LiaRubleSignSolid />{" "}
          </div>
          |
          <div className="flex items-center justify-around">
            3 <SlBasket />
          </div>
        </button>
</Link>
     
      </div>
    </header>
  );
}
