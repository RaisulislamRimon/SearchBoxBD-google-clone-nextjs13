import Link from "next/link";
import { TbGridDots } from 'react-icons/tb';

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href='https://mail.google.com/' className="hover:underline" target="_blank">
          Gmail
        </Link>
        <Link href='https://images.google.com/' className="hover:underline" target="_blank">
          Images
        </Link>
        <TbGridDots className="bg-transparent text-4xl hover:bg-gray-200 rounded-full p-2 hover:cursor-pointer" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  )
}
