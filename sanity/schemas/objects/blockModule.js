export default {
    title: 'Block Module',
    name: 'blockModule',
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H2', value: 'h2' },
        ],
        lists: [], // no lists, thanks
        // Marks let you mark up inline text in the block editor.
        marks: {
          decorators: [{ title: 'Strong', value: 'strong' }],
        },
      },
    ],
  }