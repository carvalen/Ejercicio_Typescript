System.register([], function (exports_1, context_1) {
    "use strict";
    var Mail;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Mail = class Mail {
                constructor(tipo, direccion) {
                    this._tipo = tipo;
                    this._direccion = direccion;
                }
                get direccion() {
                    return this._direccion;
                }
                get tipo() {
                    return this._tipo;
                }
                set direccion(direccion) {
                    this._direccion = direccion;
                }
                set tipo(tipo) {
                    this._tipo = tipo;
                }
            };
            exports_1("Mail", Mail);
        }
    };
});
//# sourceMappingURL=mail.js.map