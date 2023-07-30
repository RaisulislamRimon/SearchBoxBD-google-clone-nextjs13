import Link from "next/link";

export default function WebSearchResults({ results }){
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mt-3 mb-5">
        About {results?.searchInformation?.formattedTotalResults} results ({results?.searchInformation?.formattedSearchTime} seconds)
      </p>
    </div>
  )
}
