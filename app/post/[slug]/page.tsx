import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity"
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';
import CodeBlock from '../../components/CodeBlock';

async function getData(slug: string): Promise<Post>{
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`

  const data = await client.fetch(query);
  return data;
}

// export async function generateStaticParams(): Promise<string[]> {
//   const query = `*[_type == "post" && !(_id in path("drafts.**")) && defined(slug)]`

//   const data = await client.fetch(query);

//   return data.map((post: Post) => {
//     post.slug.current
//   })
// }

export default async function SlugPage({params}: {params: {slug: string}}) {
  const data = await getData(params.slug);

  const PortableTextComponents = {
    types: {
      image: ({value}: {value: any}) => {
        const imgSizes = value.asset._ref.split('-')
        const height = imgSizes[2].split('x')[1]
        const width = imgSizes[2].split('x')[0]
        return <Image src={urlFor(value).url()} alt='Image' className="rounded-lg justify-center" width={width} height={height}/>
      },
      code: ({value}: {value: any}) => (
        <CodeBlock language={value.language} code={value.code} filename={value.filename} highlightedLines={value.highlightedLines}/>
      ),
    },
    marks: {
      code: ({children}: {children: any}) => (
        <span className="font-firaCode" >{children}</span>
      )
    }
  } 

  const formattedDate: string = new Date(data._updatedAt).toLocaleDateString('en-US', 
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
  )

  return (
    <div className="bg-[#FFFFFF] dark:bg-black-russian-950 p-4 sm:p-10 m-2 sm:m-10 rounded-md">
      <header className="pt-6 xl-pb-6">
        <div className="space-y-1">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-black-russian-950 dark:text-black-russian-100 md:leading-14">
                {data.title}
              </h1>
              <p className="text-base font-medium leading-6 text-purple-300 justify-self-start sm:justify-self-end">
                {formattedDate}
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-7 divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
            <PortableText value={data.content} components={PortableTextComponents}/>
          </div>
        </div>
      </div>
    </div>
  )
}