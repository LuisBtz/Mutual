export default {
    //
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
        },
        {
            name: 'projects',
            title: 'Projects',
            type: 'projectsHome'
        }
    ],
}