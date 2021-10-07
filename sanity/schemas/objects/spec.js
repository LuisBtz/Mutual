export default {
        name: 'spec',
        title: 'Spec',
        type: 'object',
        fields: [
            {
                name: 'label',
                title: 'Label',
                type: 'string'
            },
            {
                name: 'value',
                title: 'Value',
                type: 'string'
            }
        ],
        preview: {
            select: {
              title: 'value',
              subtitle: 'label'
            },
          },
}