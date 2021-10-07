export default {
    //
    name: 'settingsPage',
    title: 'Settings',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'descriptionSite',
            title: 'Description Site',
            type: 'text'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'imageType'
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'blockModule'
        }
    ],
}