export default {
    //
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'string',
        },
        {
            name: 'aboutUs',
            title: 'About Us',
            type: 'blockModule'
        },
        {
            name: 'press',
            title: 'Press',
            type: 'press'
        }
    ],
}