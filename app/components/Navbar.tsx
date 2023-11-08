import Link from "next/link";
import ThemeButton from "./ThemeButton";
import Image from "next/image";
import profilePic from '../../public/Asset 2.svg'

export default function Navbar() {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] dark:bg-black-russian-950">
      <div className="flex justify-between h-16">
        <div className="grid grid-cols-3 justify-items-center items-center w-full">
          <Link href="https://sarahdoes.tech">
            <Image 
              src={profilePic}
              alt="svg of Sarah"
              width={50}
            />
            <p className="text-xs">Back to SarahDoes.tech</p>
          </Link>
          <Link href="/">
            <h1 className="text-2xl font-medium">
              SarahDoesTech <span className="text-black-russian-300 font-satisfy text-3xl">Blog</span>
            </h1>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </div>
  )
}