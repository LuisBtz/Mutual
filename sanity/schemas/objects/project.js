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
          name: 'height',
          title: 'Height',
          type: 'string',
          description: 'Select the height of the image:',
          options: {
              list: [
                  {title: '10%', value: 'h10'},
                  {title: '20%', value: 'h20'},
                  {title: '30%', value: 'h30'},
                  {title: '40%', value: 'h40'},
                  {title: '50%', value: 'h50'},
                  {title: '60%', value: 'h60'},
                  {title: '70%', value: 'h70'},
                  {title: '80%', value: 'h80'},
                  {title: '90%', value: 'h90'}
              ],
              layout: 'radio' // <-- defaults to 'dropdown'
          }
      },
        {
          name: 'alignment',
          title: 'Alignment',
          type: 'string',
          description: 'Select the alignment of the image:',
          options: {
              list: [
                  {title: 'Left', value: 'left'},
                  {title: 'Center', value: 'center'},
                  {title: 'Right', value: 'right'},
              ],
              layout: 'radio' // <-- defaults to 'dropdown'
          }
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