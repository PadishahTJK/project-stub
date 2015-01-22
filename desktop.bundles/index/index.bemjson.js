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
                                    url: '/img/logo.svg'
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
                                name: 'tavriaforever'
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
                        elemMods: { side: 'left', border: 'right' },
                        content: [
                            'правая колонка'
                        ]
                    },
                    {
                        elem: 'column',
                        elemMods: { side: 'center' },
                        content: [
                            'центральная колонка'
                        ]
                    },
                    {
                        elem: 'column',
                        elemMods: { side: 'right', border: 'left' },
                        content: [
                            'правая колонка'
                        ]
                    }
                ]
            }
        ]
    }
})
