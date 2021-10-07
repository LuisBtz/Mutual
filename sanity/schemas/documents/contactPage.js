export default {
    //
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'instagram',
            title: 'Instagram',
            type: 'instagram'
        }
    ],
}