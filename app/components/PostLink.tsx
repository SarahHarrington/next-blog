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
      <article className="space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:space-y-0 bg-[#F8FBF7] dark:bg-black-russian-950 p-10 border-2 border-black-russian-950 rounded-md dark:border-black-russian-100">
        <Link href={`/post/${post.slug.current}`} prefetch className="space-y-3 xl:col-span-3">
          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold leading-8 tracking-tight text-black-russian-950 dark:text-black-russian-100">
                {post.title}
              </h3>
            </div>
            <div className="justify-self-end">
              <p className="text-base font-medium leading-6 text-black-russian-950 dark:text-black-russian-100">
                {formattedDate}
              </p>
            </div>
          </div>
          <p className="prose max-w-none dark:prose-invert line-clamp-2">
            {post.overview}
          </p>
          <div className="flex flex-wrap">
            {post.tags && post.tags.map((tag) => (
              <p className="p-2 mx-2 bg-black-russian-100 rounded-md text-black-russian-950">
                {tag.title}
              </p>
            ))}
          </div>
        </Link>
      </article>
    </li>
  )
}