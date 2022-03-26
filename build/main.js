System.register(["./persona", "./direccion", "./mail", "./telefono"], function (exports_1, context_1) {
    "use strict";
    var persona_1, direccion_1, mail_1, telefono_1, primeraResidenciaCarmen, segundaResidenciaCarmen, mailCarmen, telefonoFijoCarmen, telefonoMovilCarmen, datosCarmen, primeraResidenciaLucho, segundaResidenciaLucho, mailPersonalLucho, telefonoFijoLucho, telefonoMovilLuchoPersonal, datosLucho, primeraResidenciaNoelia, segundaResidenciaNoelia, mailNoelia, telefonoFijoNoelia, telefonoMovilNoelia, datosNoelia, agenda, dniABuscar, personaAEditar, nuevaDireccion, nuevoMail, nuevoTelefono;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (persona_1_1) {
                persona_1 = persona_1_1;
            },
            function (direccion_1_1) {
                direccion_1 = direccion_1_1;
            },
            function (mail_1_1) {
                mail_1 = mail_1_1;
            },
            function (telefono_1_1) {
                telefono_1 = telefono_1_1;
            }
        ],
        execute: function () {
            primeraResidenciaCarmen = new direccion_1.Direccion("Calle Fragua ", 1, 7, "A", 29603, "Marbella", "Malaga");
            segundaResidenciaCarmen = new direccion_1.Direccion("Calle Provenza", 61, false, false, 08026, "Barcelona", "Barcelona");
            mailCarmen = new mail_1.Mail("personal", "carmenva@gmail.com");
            telefonoFijoCarmen = new telefono_1.Telefono("fijo", 992929292);
            telefonoMovilCarmen = new telefono_1.Telefono("movil", 676767676);
            datosCarmen = new persona_1.Persona('Carmen', 'Valencia Aguilar', 32, '78988594N', new Date(1990, 4, 28), 'verde', 'mujer', [primeraResidenciaCarmen, segundaResidenciaCarmen], [mailCarmen], [telefonoFijoCarmen, telefonoMovilCarmen], "Trabaja en la localidad de la segunda residencia");
            primeraResidenciaLucho = new direccion_1.Direccion("Calle Peralta", 2, 1, "A", 29600, "Marbella", "Malaga");
            segundaResidenciaLucho = new direccion_1.Direccion("Calle San Lorenzo", 2, 1, "A", 08041, "Barcelona", "Barcelona");
            mailPersonalLucho = new mail_1.Mail("personal", "lucho@hotmail.com");
            telefonoFijoLucho = new telefono_1.Telefono("fijo", 988888945);
            telefonoMovilLuchoPersonal = new telefono_1.Telefono("movil", 667777777);
            datosLucho = new persona_1.Persona('Lucho', 'Peralta', 35, '22222222T', new Date(1988, 6, 26), 'negro', 'hombre', [primeraResidenciaLucho, segundaResidenciaLucho], [mailPersonalLucho], [telefonoFijoLucho, telefonoMovilLuchoPersonal], "Tiene la segunda residencia alquilada todo el año");
            primeraResidenciaNoelia = new direccion_1.Direccion("Calle margarita ", 1, 8, "A", 29600, "Fuengirola", "Malaga");
            segundaResidenciaNoelia = new direccion_1.Direccion("Calle Albarizas", 3, false, false, 29603, "Marbella", "Malaga");
            mailNoelia = new mail_1.Mail("personal", "noelia@gmail.com");
            telefonoFijoNoelia = new telefono_1.Telefono("fijo", 992929222);
            telefonoMovilNoelia = new telefono_1.Telefono("movil", 676767666);
            datosNoelia = new persona_1.Persona('Noelia', 'Aranda Ardilla', 32, '78988584T', new Date(1990, 11, 26), 'amarillo', 'mujer', [primeraResidenciaNoelia, segundaResidenciaNoelia], [mailNoelia], [telefonoFijoNoelia, telefonoMovilNoelia], "Trabaja de lunes a viernes");
            console.log("Contactos antes del cambio:");
            console.log(datosCarmen);
            console.log(datosLucho);
            console.log(datosNoelia);
            agenda = new Array(datosCarmen, datosLucho, datosNoelia);
            dniABuscar = "22222222T";
            personaAEditar = agenda.find(persona => persona.dni === dniABuscar);
            nuevaDireccion = new direccion_1.Direccion("Passeig Maragall", 25, 5, false, 08041, "Barcelona", "Barcelona");
            nuevoMail = new mail_1.Mail("trabajo", "lu_@gmail.com");
            nuevoTelefono = new telefono_1.Telefono("fijo", 952775522);
            personaAEditar.agregarNuevaDireccion(nuevaDireccion);
            personaAEditar.agregarNuevoMail(nuevoMail);
            personaAEditar.agregarNuevoTelefono(nuevoTelefono);
            console.log("Contactos después del cambio:");
            console.log(datosCarmen);
            console.log(datosLucho);
            console.log(datosNoelia);
        }
    };
});
//# sourceMappingURL=main.js.map