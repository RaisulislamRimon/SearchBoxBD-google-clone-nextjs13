"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  async function handleRandomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0])
      .catch((error) => console.log(error));
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          name="searchInput"
          className="flex-grow focus:outline-none"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <BsFillMicFill className="text-xl text-gray-500 mr-3" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center items-center sm:flex-row mt-8">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button className="btn" onClick={handleRandomSearch}>
          {randomSearchLoading ? (
            <img src="loading.svg" alt="loading..." className="h-6 mx-auto" />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </div>
  );
}
