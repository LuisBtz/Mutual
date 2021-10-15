export default {
    //
    name: 'projects',
    title: 'Projects',
    type: 'document',
    icon: () => `📸`,
    fields: [
        {
            name: 'projectName',
            title: ' Project Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'projectName',
            },
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'imageType'
        },
        {
            name: 'slider',
            title: 'Slider',
            type: 'slider'
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
        {
            name: 'city',
            title: 'City',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'specs',
            title: 'Specs',
            type: 'specs'
        }
    ],
    preview: {
        select: {
          title: 'projectName',
          subtitle: 'description',
          media: 'thumbnail'
        },
      },
}