export default {
    name: 'slide',
    title: 'Slide',
    type: 'object',
    fields: [
        {
            name: 'photo',
            title: 'Photo',
            type: 'imageType'
        },
        {
            name: 'video',
            title: 'Video',
            type: 'videoSlide'
        },
    ],
    preview: {
        select: {
          title: 'photo.alt',
          media: 'photo'
        },
      },
}