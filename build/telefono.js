System.register([], function (exports_1, context_1) {
    "use strict";
    var Telefono;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Telefono = class Telefono {
                constructor(tipo, numero) {
                    this._tipo = tipo;
                    this._numero = numero;
                }
                get numero() {
                    return this._numero;
                }
                get tipo() {
                    return this._tipo;
                }
                set numero(numero) {
                    this._numero = numero;
                }
                set tipo(tipo) {
                    this._tipo = tipo;
                }
            };
            exports_1("Telefono", Telefono);
        }
    };
});
//# sourceMappingURL=telefono.js.map