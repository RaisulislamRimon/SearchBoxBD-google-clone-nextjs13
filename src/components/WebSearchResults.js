import Link from "next/link";
import parse from "html-react-parser";

export default function WebSearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mt-3 mb-5">
        About {results?.searchInformation?.formattedTotalResults} results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results?.items?.map((result) => (
        <div className="mb-8 max-w-xl" key={result?.link}>
          <div className="group">
            <Link className="text-sm truncate" href={result?.link}>
              {result?.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800"
              href={result?.link}
            >
              {result?.title}
            </Link>
          </div>
          <p>{parse(result?.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
}
