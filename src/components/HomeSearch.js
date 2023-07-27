'use client';

import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
  const [input, setInput] = useState('');
  const router = useRouter();

  // console.log('input ', input);
  const handleSubmit = (e) => {
    // function handleSubmit(e) {
    e.preventDefault();
    // const form = e.target;
    // const searchInput = form.searchInput.value;
    // console.log('searchInput ', searchInput);
    // console.log('input ', input);
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
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
        <button className="btn">I&apos;m Feeling Lucky</button>
      </div>
    </div>
  );
}
