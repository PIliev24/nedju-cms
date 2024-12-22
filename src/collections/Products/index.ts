import { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: 'products',
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
     {
      name: 'description',
      type: 'text',
    },
     {
      name: 'alt',
      type: 'text',
    },
  ],
}
