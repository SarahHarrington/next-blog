'use client'

import Link from "next/link"
import { Post } from "../lib/interface"

interface PostProps {
  post: Post;
}

export default function PostLink({post}: PostProps) {
  const formattedDate: string = new Date(post._createdAt).toLocaleDateString('en-US', 
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
  )

  console.log(post)
  
  return (
    <li key={post._id} className="py-4">
      <article className="space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:space-y-0 bg-[#FFFFFF] dark:bg-black-russian-950 p-6 md:p-10 border-2 border-black-russian-950 rounded-md dark:border-black-russian-100 shadow-md dark:shadow-black-russian-900/25 hover:bg-black-russian-50 dark:hover:bg-black-russian-900">
        <Link href={`/post/${post.slug.current}`} prefetch className="space-y-3 xl:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <h3 className="text-lg md:text-2xl font-bold leading-8 tracking-tight text-black-russian-950 dark:text-black-russian-100">
              {post.title}
            </h3>
            <div className="justify-self-start md:justify-self-end">
              <p className="text-sm md:text-lg leading-3 text-black-russian-950 dark:text-black-russian-100">
                {formattedDate}
              </p>
            </div>
          </div>
          <p className="prose max-w-none dark:prose-invert line-clamp-2 leading-4 md:leading-6">
            {post.overview}
          </p>
          <div className="flex flex-wrap">
            {post.tags && post.tags.map((tag) => (
              <p key={tag._id} className="p-2 mx-2 bg-black-russian-50 rounded-md text-black-russian-950">
                {tag.title}
              </p>
            ))}
          </div>
        </Link>
      </article>
    </li>
  )
}