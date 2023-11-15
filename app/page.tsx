import { Post, Tag } from "./lib/interface";
import { client } from "./lib/sanity";
import PostLink from "./components/PostLink";
import TagButton from "./components/TagButton";

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post" && !(_id in path("drafts.**"))] {
    ...,
    tags[] -> {
      slug,
      title,
      _id,
      meta_description,
      _createdAt
    }
  }`;

  const posts = await client.fetch(query);
  return posts
}

async function getTags(): Promise<Tag[]> {
  const query = `*[_type == "tags" && !(_id in path("drafts.**"))]`
  const tags = await client.fetch(query)
  return tags
}

export default async function IndexPage() {
  const posts = await getPosts()
  const allTags = await getTags();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_auto] gap-x-5">
      <div className="flex flex-wrap mt-10 md:mt-20">
        {allTags.map((tag: Tag) => (
          <TagButton 
            key={tag._id} 
            tag={tag}
          />
        ))}
      </div>
      <div className="">
        <div className="space-y-2 pt-6 pb-6 md:space-y5">
          <h1 className="text-black-russian-950 dark:text-black-russian-200 text-xl md:text-3xl">
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
    </div>
  )
}