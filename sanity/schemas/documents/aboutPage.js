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
            name: 'image',
            title: 'About Image',
            type: 'imageType'
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