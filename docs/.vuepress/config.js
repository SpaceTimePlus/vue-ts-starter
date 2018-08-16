module.exports = {
    base: './',
    title: 'Vue Typescript starter',
    description: 'Vue Typescript starter',
    head: [],
    port: 8800,
    dest: '.vuepress/dist',
    ga: '',
    serviceWorker: true,
    // theme: 'foo',
    evergreen: true,
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'External', link: 'https://google.com'},
            {
                text: 'Languages',
                items: [
                    {text: 'Chinese', link: '/language/chinese'},
                    {text: 'Japanese', link: '/language/japanese'}
                ]
            }
        ],
        sidebar: [
            {
                title: 'Group 1',
                collapsable: false,
                children: [
                    '/'
                ]
            },
        ]
    },

}