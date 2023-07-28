import HomeFooter from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* header */}
      <HomeHeader />

      {/* body */}
      <div className="flex flex-col mt-24">
        <Image
          src="/search_box.png"
          width={300}
          height={100}
          alt="Search_box Logo"
          className="cursor-pointer mx-auto"
        />
        <HomeSearch />
      </div>

      {/* footer
      <HomeFooter /> */}
    </div>
  );
}
