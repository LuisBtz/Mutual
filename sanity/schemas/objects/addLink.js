export default {
    name: 'addLink',
    title: 'Add Link',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url'
        }
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'url'
        },
      },
}