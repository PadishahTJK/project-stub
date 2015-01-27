({
    block : 'page',
    title : 'Яндекс.Музыка',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'music' },
    content : {
        elem: 'root',
        content: [
            {
                block : 'header',
                content : [
                    {
                        elem: 'side',
                        mods: { align: 'left' },
                        content: [
                            {
                                block: 'logo',
                                mix: { block: 'header', elem: 'logo' },
                                content: {
                                    block: 'image',
                                    alt: 'Яндекс',
                                    url: '../../img/logo.svg'
                                }
                            },
                            {
                                elem: 'nameplate',
                                url: '//music.yandex.ru',
                                content: 'Музыка'
                            },
                            {
                                block: 'form',
                                action: '/',
                                method: 'POST',
                                content: {
                                    block : 'control-group',
                                    content : [
                                        {
                                            block : 'input',
                                            mix: { block: 'header', elem: 'search-input' },
                                            mods : { theme : 'islands', size : 'l', type : 'search' },
                                            placeholder : 'Трек, исполнитель'
                                        },
                                        {
                                            block : 'button',
                                            mods : { theme : 'islands', size : 'l', type: 'submit' },
                                            text : 'Поиск'
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        elem: 'side',
                        mods: { align: 'right' },
                        content: [
                            {
                                block: 'button',
                                mix: {
                                    block: 'header',
                                    elem: 'action',
                                    elemMods: { type: 'purchase' }
                                },
                                mods: { theme: 'islands', view: 'action', size: 'l' },
                                text: 'Подписка',
                                icon: {
                                    block: 'icon',
                                    mods: { type: 'purchase' }
                                }
                            },
                            {
                                block: 'button',
                                mix: {
                                    block: 'header',
                                    elem: 'action',
                                    elemMods: { type: 'love' }
                                },
                                mods: { theme: 'islands', size: 'l' },
                                text: 'Моя музыка',
                                icon: {
                                    block: 'icon',
                                    mods: { type: 'love' }
                                }
                            },
                            {
                                block: 'user',
                                mix: { block: 'header', elem: 'user' },
                                name: 'tavriaforever',
                                content: [
                                    {
                                        block: 'image',
                                        mix: { block: 'user', elem: 'picture' },
                                        url: '../../img/user.jpg'
                                    },
                                    {
                                        elem: 'name'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                block: 'content',
                content: [
                    {
                        elem: 'column',
                        mix: { block: 'sidebar' },
                        elemMods: { side: 'left', border: 'right' },
                        content: [
                            {
                                block: 'sidebar',
                                elem: 'item',
                                elemMods: { gap: 'off' },
                                content: {
                                    block: 'menu',
                                    mods: { theme: 'islands', size: 'xl' },
                                    content: [
                                        { content: 'Рекомендации', url: 'recommend' },
                                        { content: 'Лента событий', url: 'list-events' },
                                        { content: 'Избранное', url: 'favorite' },
                                        { content: 'Исполнители', url: 'artists' }
                                    ].map(function(item) {

                                        if(Array.isArray(item)) {
                                            return {
                                                elem: 'group',
                                                title: item.title,
                                                content: item.content.map(function(subitem) {
                                                    return {
                                                        block: 'menu-item',
                                                        mods: { type: 'link' },
                                                        content: {
                                                            block : 'link',
                                                            url : subitem.url,
                                                            content : subitem.content
                                                        }
                                                    }
                                                })
                                            };
                                        }

                                        return {
                                            block: 'menu-item',
                                            mods: { type: 'link' },
                                            content: {
                                                block : 'link',
                                                url : item.url,
                                                content : item.content
                                            }
                                        };
                                    })
                                }
                            },
                            {
                                block: 'sidebar',
                                elem: 'item',
                                content: [
                                    {
                                        block: 'title',
                                        mix: { block: 'sidebar', elem: 'title' },
                                        mods: { level: 3 },
                                        content: 'Коллекции'
                                    },
                                    {
                                        block : 'menu',
                                        mods : { theme : 'islands', size : 'xl', mode : 'radio-check' },
                                        val : 2,
                                        content : [
                                            {
                                                block : 'menu-item',
                                                val : 1,
                                                content : 'for runs'
                                            },
                                            {
                                                block : 'menu-item',
                                                val : 2,
                                                content : 'rock'
                                            },
                                            {
                                                block : 'menu-item',
                                                val : 3,
                                                content : 'party'
                                            },
                                            {
                                                block : 'menu-item',
                                                val : 4,
                                                content : 'techno'
                                            },
                                            {
                                                elem: 'group',
                                                title: 'Рекомендуемые',
                                                content: [
                                                    {
                                                        block : 'menu-item',
                                                        val : 5,
                                                        content : 'Хиты 90-х'
                                                    },
                                                    {
                                                        block : 'menu-item',
                                                        val : 6,
                                                        content : 'Dubstep'
                                                    },
                                                    {
                                                        block : 'menu-item',
                                                        val : 7,
                                                        content : 'Trance'
                                                    },
                                                    {
                                                        block : 'menu-item',
                                                        val : 8,
                                                        content : 'Techno'
                                                    },
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'column',
                        elemMods: { side: 'center' },
                        content: {
                            block: 'artist',
                            content: [
                                {
                                    elem: 'header',
                                    content: [
                                        {
                                            elem: 'picture',
                                            content: {
                                                block: 'image',
                                                alt: 'Amon Tobin',
                                                url: '../../img/artists/amon-tobin.jpg'
                                            }
                                        },
                                        {
                                            elem: 'info',
                                            content: [
                                                {
                                                    block: 'title',
                                                    mix: { block: 'artist', elem: 'title' },
                                                    mods: { level: 1 },
                                                    content: 'Amon Tobin'
                                                },
                                                {
                                                    elem: 'description',
                                                    source: {
                                                        name: 'Википедия',
                                                        url: 'ru.wikipedia.org'
                                                    },
                                                    content: 'Электронный музыкант, диджей и музыкальный продюсер, ' +
                                                    'работающий в Великобритании'
                                                },
                                                {
                                                    elem: 'footer',
                                                    content: [
                                                        {
                                                            block: 'button',
                                                            mix: { block: 'artist', elem: 'footer-item' },
                                                            mods: { theme: 'islands', size: 'l' },
                                                            text: 'Подписаться'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mix: { block: 'artist', elem: 'footer-item' },
                                                            mods: { theme: 'islands', size: 'l' },
                                                            text: 'Радио'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'tabs',
                                    mix: { block: 'artist', elem: 'tabs' },
                                    mods: { theme: 'islands', type: 'button', size: 'm' },
                                    tabs: [
                                        {
                                            title: 'Всё',
                                            checked: true,
                                            content: {
                                                block: 'player',
                                                mix: { block: 'artist', elem: 'player' },
                                                mods: { view: 'list' },
                                                content: [
                                                    {
                                                        elem: 'side',
                                                        mods: { align: 'left' },
                                                        content: {
                                                            block: 'album',
                                                            content: [
                                                                [
                                                                    {
                                                                        block: 'image',
                                                                        mix: { block: 'album', elem: 'picture' },
                                                                        alt: 'Обложка',
                                                                        url: '../../img/album/amon-tobin.jpg'
                                                                    },
                                                                    {
                                                                        block: 'title',
                                                                        mix: { block: 'album', elem: 'title' },
                                                                        mods: { level: 6 },
                                                                        content: 'Isam'
                                                                    },
                                                                    {
                                                                        elem: 'created',
                                                                        content: '2011'
                                                                    },
                                                                    {
                                                                        block: 'player-actions',
                                                                        mix: { block: 'album', elem: 'actions' },
                                                                        mods: { size: 'm' },
                                                                        js: { userId: 15, id: 140, type: 'album' },
                                                                        content: [
                                                                            {
                                                                                block: 'link',
                                                                                mix: { block: 'player-actions', elem: 'item' },
                                                                                mods: { pseudo: true },
                                                                                title: 'Играть',
                                                                                content: {
                                                                                    block: 'icon',
                                                                                    mix: { block: 'player-actions', elem: 'icon' },
                                                                                    mods: { player: 'play' },
                                                                                }
                                                                            },
                                                                            {
                                                                                block: 'link',
                                                                                mix: { block: 'player-actions', elem: 'item' },
                                                                                mods: { pseudo: true },
                                                                                title: 'Поделиться',
                                                                                content: {
                                                                                    block: 'icon',
                                                                                    mix: { block: 'player-actions', elem: 'icon' },
                                                                                    mods: { player: 'share' }
                                                                                }
                                                                            },
                                                                            {
                                                                                block: 'link',
                                                                                mix: { block: 'player-actions', elem: 'item' },
                                                                                mods: { pseudo: true },
                                                                                title: 'Добавить в избранное',
                                                                                content: {
                                                                                    block: 'icon',
                                                                                    mix: { block: 'player-actions', elem: 'icon' },
                                                                                    mods: { player: 'favorite' }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            title: '5 альбомов',
                                            content: {
                                                block: 'player',
                                                mods: { view: 'list' },
                                                content: '5 альбомов'
                                            }
                                        },
                                        {
                                            title: '12 синглов',
                                            content: {
                                                block: 'player',
                                                mods: { view: 'list' },
                                                content: '12 синглов'
                                            }
                                        },
                                        {
                                            title: '8 сборников',
                                            content: {
                                                block: 'player',
                                                mods: { view: 'list' },
                                                content: '8 сборников'
                                            }
                                        },
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        elem: 'column',
                        elemMods: { side: 'right', border: 'left' },
                        content: [
                            {
                                block: 'sidebar',
                                elem: 'item',
                                content: [
                                    {
                                        block: 'title',
                                        mix: { block: 'sidebar', elem: 'title' },
                                        mods: { level: 3 },
                                        content: 'Участвует в проектах'
                                    },
                                    {
                                        block: 'menu',
                                        mods: { theme: 'islands', size: 'xl' },
                                        content: [
                                            {
                                                content: 'Two fingers',
                                                url: 'two-fingers',
                                                img: '../../img/artists/two-fingers.jpg'
                                            },
                                            {
                                                content: 'Eskamon',
                                                url: 'eskamon',
                                                img: '../../img/artists/eskamon.jpg'
                                            }
                                        ].map(function(item) {
                                                return {
                                                    block: 'menu-item',
                                                    mods: { type: 'link', image: 'yes' },
                                                    content: {
                                                        block : 'link',
                                                        mix: { block: 'menu-item', elem: 'link' },
                                                        url : item.url,
                                                        content : [
                                                            {
                                                                block: 'image',
                                                                mix: { block: 'menu-item', elem: 'image' },
                                                                alt: item.content,
                                                                url: item.img
                                                            },
                                                            {
                                                                elem: 'desc',
                                                                content: item.content
                                                            }
                                                        ]
                                                    }
                                                };
                                            })
                                    }
                                ]
                            },
                            {
                                block: 'sidebar',
                                elem: 'item',
                                content: [
                                    {
                                        block: 'title',
                                        mix: { block: 'sidebar', elem: 'title' },
                                        mods: { level: 3 },
                                        content: 'Похожие исполнители'
                                    },
                                    {
                                        block: 'menu',
                                        mods: { theme: 'islands', size: 'xl' },
                                        content: [
                                            {
                                                content: 'Apparat',
                                                url: 'apparat',
                                                img: '../../img/artists/apparat.jpg'
                                            },
                                            {
                                                content: 'Modeselektor',
                                                url: 'modeselektor',
                                                img: '../../img/artists/modeselektor.jpg'
                                            },
                                            {
                                                content: 'Four tet',
                                                url: 'four-tet',
                                                img: '../../img/artists/four-tet.jpg'
                                            },
                                            {
                                                content: 'John hopkins',
                                                url: 'john-hopkins',
                                                img: '../../img/artists/john-hopkins.jpg'
                                            },
                                            {
                                                content: 'Thom yorke',
                                                url: 'thom-yorke',
                                                img: '../../img/artists/thom-yorke.jpg'
                                            }
                                        ].map(function(item) {
                                                return {
                                                    block: 'menu-item',
                                                    mods: { type: 'link', image: 'yes' },
                                                    content: {
                                                        block : 'link',
                                                        mix: { block: 'menu-item', elem: 'link' },
                                                        url : item.url,
                                                        content : [
                                                            {
                                                                block: 'image',
                                                                mix: { block: 'menu-item', elem: 'image' },
                                                                alt: item.content,
                                                                url: item.img
                                                            },
                                                            {
                                                                elem: 'desc',
                                                                content: item.content
                                                            }
                                                        ]
                                                    }
                                                };
                                            })
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
})
