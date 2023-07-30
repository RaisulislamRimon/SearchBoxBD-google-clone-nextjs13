"use client";

import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  
  const selectTab = (tabName) => {
    router.push(`/search/${tabName === "Images" ? "image" : "web" }?searchTerm=${searchTerm}`)
  }
  return (
    <div className="flex space-x-2 border-b-4 mx-auto">
      <div onClick={ () => selectTab("All") } className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "!text-blue-600 !border-blue-400"}`}>
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div onClick={ () => selectTab("Images") } className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/image" && "!text-blue-600 !border-blue-400"}`}>
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}

