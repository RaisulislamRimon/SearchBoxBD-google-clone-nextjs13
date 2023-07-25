import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

export default function HomeSearch() {
  return (
    <div>
      <form className="flex w-full mt-5 mx-auto max-w-[90%] px-5 py-3 border border-gray-200 rounded-full ">
        <AiOutlineSearch className='text-lg text-gray-500 mr-3' />
        {/* <input type="text" className="w-full px-5 py-3 text-lg focus:outline-none border border-gray-200 rounded-full" /> */}
        <input type="text" className="" />
        <BsFillMicFill className='text-lg text-gray-500 mt-3' />
        <div className="flex flex-row w-full space-y-2 justify-center mt-8 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button className="btn">Google Search</button>
          <button className="btn">I&apos;m Feeling Lucky</button>
        </div>
      </form>
    </div>
  )
}