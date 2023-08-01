import Link from "next/link";
import WebSearchResults from "@/components/WebSearchResults";

export default async function WebSearchPage({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_API_KEY}&q=${searchParams?.searchTerm}`
  );
  if (!response?.ok) {
    throw new Error("Something went wrong...");
  }
  const data = await response.json();
  const results = data?.items;
  const totalResults = data?.searchInformation?.totalResults;

  return (
    <>
      {totalResults === "0" && (
        <div className="text-2xl font-bold text-red-500 text-center pt-20">
          <h1 className="">No result found...</h1>
        </div>
      )}
      {results && <WebSearchResults results={data} />}
    </>
  );
}
