module.exports = {
    base: '/mooc/',
    title: 'MOOC',
    description: '致力于为每种语言只提供一条最优的学习教程！',
    plugins: [
        '@vuepress/back-to-top'
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/hero.png',
        nav: [
            {
                text: '前端开发',
                items: [
                    {
                        text: '入门教程',
                        items: [
                            { text: 'HTML', link: '/front/html/' },
                            { text: 'CSS', link: '/front/css/' },
                            { text: 'Javascript', link: '/front/js/' }
                        ]
                    },
                    {
                        text: '进阶教程',
                        items: [
                            { text: 'Vue', link: '/front/vue/' },
                            { text: 'React', link: '/front/react/' },
                        ]
                    },
                ]
            },
            {
                text: 'Golang',
                items: [
                    {
                        text: '入门教程',
                        items: [
                            { text: 'Go语法', link: '/go/syntax/' },
                            { text: 'Go框架', link: '/go/web/' },
                        ]
                    },
                    {
                        text: '进阶教程',
                        items: [
                            { text: '区块链', link: '/go/blockchain/' },
                        ]
                    },
                ]
            },
            {
                text: 'Python',
                items: [
                    {
                        text: '入门教程',
                        items: [
                            { text: 'Python语法', link: '/python/syntax/' },
                            { text: 'Python框架', link: '/python/web/' },
                        ]
                    },
                    {
                        text: '进阶教程',
                        items: [
                            { text: '机器学习', link: '/python/machinelearning/' },
                        ]
                    },
                ]
            },
        ],
        sidebar: {
            '/front/': ['html', 'css', 'js'],
            '/go/': ['syntax', 'web'],
        },
        displayAllHeaders: true,
        searchMaxSuggestions: 10,
        lastUpdated: '上次更新', 
        repo: 'if-ls/mooc',
        smoothScroll: true,

    }
}
