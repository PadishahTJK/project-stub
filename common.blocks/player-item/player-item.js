// В bem-core v2.x.x i-bem.js использует модульную систему ymodules
// Для блоков с "DOM" реализацией, модуль i-bem__dom обязателен
modules.define('player-item', ['i-bem__dom'], function(provide, BEMDOM) {
    // "Провайдим блок" и декларируем его для i-bem.js
    provide(BEMDOM.decl(this.name, {

        // Триггеры на изменения модификаторов у блока
        onSetMod: {

            // По сути конструктор класса блока
            js: {
                inited: function() {
                    // В this.params доступны параметры блока
                    var song = this.params.song;

                    if(song) {
                        this._button = this.findBlockInside('button', 'link');
                        this._icon = this.findBlockInside('button-icon', 'icon');

                        // html5 <audio> API
                        this._audio = new Audio(song);
                    }
                }
            },

            // Пример триггера на установку модификатора active
            active: {
                'true': function() {
                    this._audio.play();
                    this.setMod(this.elem('button'), 'action', 'pause');
                },

                '': function() {
                    this._audio.pause();
                    this.setMod(this.elem('button'), 'action', 'play');
                }
            }
        },

        // Триггеры на изменения модификаторов у элементов блока
        onElemSetMod: {
            button: {
                action: {
                    pause: function() {
                        this._icon.setMod('player', 'pause');
                    },
                    play: function() {
                        this._icon.setMod('player', 'play');
                    }
                }
            }
        },

        // приватный метод, может использовать только внутри блока
        _onClickPlay: function() {
            this.toggleMod('active', true, '');
        }
    }, {
        live: function() {
            // Блок инициализируется после клика по блоку link внутри
            this.liveInitOnBlockInsideEvent('click', 'link', function() {
                this._onClickPlay();
            });
        }
    }));
});
