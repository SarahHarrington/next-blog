import { Post, Tag } from "./lib/interface";
import { client } from "./lib/sanity";
import PostLink from "./components/PostLink";

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post" && !(_id in path("drafts.**"))] {
    ...,
    tags[] -> {
      slug,
      title,
      _id,
      meta_description
    }
  }`;

  const posts = await client.fetch(query);
  console.log('posts', posts)
  return posts
}

async function getTags(): Promise<Tag[]> {
  const query = `*[_type == "tags" && !(_id in path("drafts.**"))]`
  const tags = await client.fetch(query)
  console.log('tags', tags)
  return tags
}

export default async function IndexPage() {
  const posts = await getPosts()
  const allTags = await getTags();
  
  return (
    <div>
      <div className="divide-y divide-black-russian-950 dark:divide-black-russian-200">
        <div className="space-y-2 pt-6 pb-8 md:space-y5">
          <h1 className="text-black-russian-950 dark:text-black-russian-200 text-3xl">
            All Posts
          </h1>
        </div>
        <ul>
          {posts.map((post) => (
              <PostLink key={post._id} post={post}/>
            )  
          )}
        </ul>
      </div>
      <div>
        {allTags.map((tag) => (
          <p>{tag.title}</p>
        ))}
      </div>
    </div>
  )
}