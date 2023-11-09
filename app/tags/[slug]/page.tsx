import PostLink from '@/app/components/PostLink';
import { Post } from '../../lib/interface'
import {client} from '../../lib/sanity'

interface Params {
  slug: string
}

async function getPosts(slug: string, params: Params): Promise<Post[]> {
  const query = `*[_type == "post" && $slug in tags[]->slug.current]{
    _createdAt,
    publishedAt,
    title,
    content,
    overview,
    slug,
    "tags": tags[]-> {title,slug},
  }`;

  const posts = await client.fetch(query, params);
  console.log('posts', posts)
  return posts
}

export default async function TagPage({params}: {params: {slug: string}}) {
  const posts = await getPosts(params.slug, params)

  return (
    <ul>
      <h1 className='text-4xl text-center mt-10'>#{params.slug}</h1>
      {posts.map((post) => (
        <PostLink key={post._id} post={post}/>
      ))}
    </ul>
    )
}
