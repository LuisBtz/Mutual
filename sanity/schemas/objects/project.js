export default {
    name: 'project',
    title: 'Project',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'imageType'
        },
        {
            name: 'selectProject',
            title: 'Select Project',
            type: 'reference',
            to: [{ type: 'projects' }],
          },
    ],
    preview: {
        select: {
          title: 'selectProject.projectName',
          subtitle: 'selectProject.description',
          media: 'image'
        },
      },
}