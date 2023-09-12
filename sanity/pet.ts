const pet = {
    title: 'Products',
    name: 'products',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          {
            type: 'block',
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }
  export default pet