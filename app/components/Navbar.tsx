import Link from "next/link";
import ThemeButton from "./ThemeButton";
import Image from "next/image";
import profilePic from '../../public/Asset 2.svg'

export default function Navbar() {
  return (
    <div className="mx-auto sm:px-4 lg:px-8 bg-[#FFFFFF] dark:bg-black-russian-950 shadow-md dark:shadow-black-russian-900/25">
      <div className="flex justify-between h-16">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center items-center w-full pr-2">
          <Link className="hidden md:block" href="https://sarahdoes.tech">
            <Image 
              src={profilePic}
              alt="svg of Sarah"
              width={50}
            />
            <p className="text-xs">Back to SarahDoes.tech</p>
          </Link>
          <Link href="/">
            <h1 className="sm:text-md lg:text-lg xl:text-2xl dark:text-[#FFFFFF]">
              SarahDoesTech <span className="text-black-russian-300 font-satisfy sm:text-lg lg:text xl:text-3xl">Blog</span>
            </h1>
          </Link>
          <ThemeButton/>
        </div>
      </div>
    </div>
  )
}