import Link from "next/link"
import { Tag } from '../lib/interface'

interface TagProps {
  tag: Tag;
}

export default function TagButton({tag}: TagProps) {
  return (
    <Link href={`/tags/${tag.slug.current}`}> 
      <div className="flex mx-2 border-2 dark:border-black-russian-50 p-2 md:p-4 text-center dark:bg-black-russian-950 bg-[#FFFFFF] rounded-md shadow-md hover:bg-black-russian-50 dark:text-[#FFFFFF] dark:hover:bg-black-russian-900">
        <p>
          {tag.slug.current}
        </p>
      </div>
    </Link>
  )
}