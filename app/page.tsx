import { Post } from "./lib/interface";
import { client } from "./lib/sanity";
import PostLink from "./components/PostLink";

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
            <PostLink key={post._id} post={post}/>
          )  
        )}
      </ul>
    </div>
  )
}