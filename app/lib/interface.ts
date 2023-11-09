export interface Post {
  title: string;
  overview: string;
  content: any;
  _id: string;
  slug: {
    current: string;
    title: string;
  };
  _createdAt: string;
  tags: Tag[];
}

export interface Tag {
  title: string;
  _id: string;
  _createdAt: string;
  meta_description: string;
  slug: Slug;
}

interface Slug {
  current: string;
  _type: string;
}