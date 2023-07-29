"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { usePathname } from "next/navigation";

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  return (
    <div>
      <div className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "text-blue-600 border-blue-600"}`}>
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
    </div>
  );
}
