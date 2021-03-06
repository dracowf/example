modules.define(
    'form',
    [
        'inherit',
        'block',
        'input',
        'super-input'
    ],
    function (
        provide,
        inherit,
        YBlock,
        Input,
        SuperInput
    ) {
        var form = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

                var formDomNode = this.getDomNode();

                // Создаём инпут
                this._greetingInput = new Input({
                    value: 'Привет, Бивис',
                    name: 'loginField',
                    placeholder: 'Инпут на сайте',

                    parentNode: formDomNode
                });
                this._greetingInput.on('input-submitted', this._onInputSubmitted, this);

                // Создаём инпут для пароля
                this._passwordInput = new SuperInput({
                    name: 'passwordField',
                    type: 'password',
                    placeholder: 'Введите пароль',

                    parentNode: formDomNode
                });
                this._passwordInput.on('input-submitted', this._onInputSubmitted, this);
            },

            _onInputSubmitted: function () {
                console.log('Форма поймала событие от Input');
            }
        }, {
            getBlockName: function () {
                return 'form';
            }
        });

        provide(form);
    });
