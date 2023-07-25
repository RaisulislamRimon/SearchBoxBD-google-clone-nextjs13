"use client";

import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import {useState} from 'react'

export default function HomeSearch() {
    const [input, setInput] = useState("")
    const handleSubmit = (e) => {
    // function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const searchInput = form.searchInput.value;
        console.log(searchInput)
    }
    return (
    <div>
        <form onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
            <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
            <input type="text" name="searchInput" className="flex-grow focus:outline-none" />
            <BsFillMicFill className='text-xl text-gray-500 mr-3' />
        </form>
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center items-center sm:flex-row mt-8">  
            <button className="btn">Google Search</button>
            <button className="btn">I'm Feeling Lucky</button>
        </div>
    </div>
    )
}