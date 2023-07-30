import Link from "next/link";

export default async function WebSearchPage({ searchParams }) {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_API_KEY}&q=${searchParams?.searchTerm}`)
  const data = await response.json();
  const results = data?.items;
  // console.log(data);
  // console.log(results);
  // console.log(searchParams?.searchTerm);
  
  return (
    <div>
      { 
        results && results.map(result => 
          <div className="border border-gray-300 p-4 m-4 rounded-lg">
            <Link href={result?.link} target="_blank">
              <p className="text-red-600">{result?.formattedUrl}</p>
              <h1 className="text-2xl font-bold">{result?.title}</h1>
              <p  className="text-xl">{result?.snippet}</p>
            </Link>
          </div>
        )
      }
      <h1>WebSearchPage</h1>
    </div>
  );
}
