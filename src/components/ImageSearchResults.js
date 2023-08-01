import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

export default function ImageSearchResults({ results }) {
  return (
    <div className="pb-48 sm:pb-24 mt-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results?.items?.map((result) => (
          <div key={result?.link} className="mb-8">
            <div className="group">
              <Link href={result?.image?.contextLink} target="_blank">
                <img
                  src={result?.link}
                  alt={result?.title}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow mb-2"
                />
              </Link>
              <Link href={result?.image?.contextLink} target="_blank">
                <h2 className="group-hover:underline text-xl truncate">
                  {result?.title}
                </h2>
              </Link>
              <Link href={result?.image?.contextLink} target="_blank">
                <p className="group-hover:underline text-gray-600">
                  {result?.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
