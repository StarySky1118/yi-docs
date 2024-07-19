module.exports = {
    title: 'YiBlog',
    description: 'Just playing around',
    themeConfig: {
        // 导航栏
        nav: [
            {text: '主页', link: '/'},
            {text: '开发', link: '/dev/'},
            {text: '机器学习', link: '/machine_learning/'},
            {text: '算法', link: '/algorithm/'}
        ],
        // 侧边栏
        sidebar: {
            '/algorithm/': [
                {
                    title: 'Algorithm',
                    path: '/algorithm/',
                    collapsable: false,
                    children: [
                        '/algorithm/' // 该目录下的 README.md
                    ]
                }
            ],
            '/dev/': [
                {
                    title: 'Web 应用开发',
                    path: '/dev/',
                    collapsable: false,
                    children: [
                        '/dev/',
                        '/dev/One',
                        {
                            title: 'Go',
                            path: '/dev/go/',
                            children: [
                                {
                                    title: 'Go 基础语法',
                                    path: '/dev/go/go_basic',
                                    collapsable: true
                                },
                                '/dev/go/gin'
                            ]
                        }
                    ]
                }
            ],
            '/machine_learning/': [
                {
                    title: 'Machine Learning',
                    path: '/machine_learning/',
                    collapsable: false,
                    children: [
                        '/machine_learning/',
                        '/machine_learning/123',
                        '/machine_learning/one'
                    ]
                }
            ],
            '/': [
                {
                    title: 'Home',
                    path: '/',
                    collapsable: false
                },
                {
                    title: 'Page A',
                    path: '/page-a',
                    collapsable: false
                },
                {
                    title: 'Page B',
                    path: '/page-b',
                    collapsable: false
                }
            ]
        }
    }
}
