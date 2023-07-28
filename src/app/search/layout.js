import SearchHeader from "@/components/SearchHeader";

export const metadata = {
  title: "Search Box - Google Clone Next Js 13",
  description: "Search Box - Google Clone Next Js 13",
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
