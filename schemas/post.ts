import { ImageIcon, CodeBlockIcon } from '@sanity/icons'

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tags" } }],
    },
    {
      name: 'internalLink',
      type: 'object',
      title: 'Internal link',
      fields: [
        {
          name: 'reference',
          type: 'reference',
          title: 'Reference',
          to: [
            { type: 'post' },
            { type: 'category'},
            { type: 'tags' },
          ]
        }
      ]
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          icon: ImageIcon,
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text'
            }
          ]
        },
        {
          type: 'code',
          name: 'code',
          title: 'Code',
          icon: CodeBlockIcon,
          options: {
            withFilename: true,
          }
        }
      ]
    }
  ]
}
