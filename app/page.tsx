import Link from "next/link";
import { Post } from "./lib/interface";
import { client } from "./lib/sanity";

async function getData(): Promise<Post[]> {
  const query = `*[_type=="post"]`;
  const data = await client.fetch(query);
  return data
}

export default async function IndexPage() {
  const data = await getData()
  return (
    <div className="divide-y divide-black-russian-950 dark:divide-black-russian-200">
      <div className="space-y-2 pt-6 pb-8 md:space-y5">
        <h1 className="text-black-russian-950 dark:text-black-russian-200 text-3xl">
          All Posts
        </h1>
      </div>
      <ul>
        {data.map((post) => (
            <li key={post._id} className="py-4">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 bg-[#F8FBF7] dark:bg-black-russian-950 p-10 border-2 border-black-russian-950 rounded-md dark:border-black-russian-100">
                <Link href={`/post/${post.slug.current}`} prefetch className="space-y-3 xl:col-span-3">
                  <div className="grid grid-cols-2">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight text-black-russian-950 dark:text-black-russian-100">
                        {post.title}
                      </h3>
                    </div>
                    <div className="justify-self-end">
                      <p className="text-base font-medium leading-6 text-black-russian-950 dark:text-black-russian-100">
                        {new Date(post._createdAt).toLocaleDateString('en-US', 
                        {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="prose max-w-none dark:prose-invert line-clamp-2">
                    {post.overview}
                  </p>
                </Link>
              </article>
            </li>
          )  
        )}
      </ul>
    </div>
  )
}