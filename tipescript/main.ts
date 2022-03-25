import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const primeraResidenciaCarmen = new Direccion(
  "Calle Fragua ",
  1,
  7,
  "A",
  29603,
  "Marbella",
  "Malaga"
)

const segundaResidenciaCarmen = new Direccion(
  "Calle Provenza",
  61,
  false,
  false,
  08026,
  "Barcelona",
  "Barcelona"
)

const mailCarmen Mail(
  
  "carmenva@gmail.com"
)

const telefonoFijoCarmen = new Telefono(
  "fijo",
  992929292
)

const telefonoMovilCarmen = new Telefono(
  "movil",
  676767676
)

const datosCarmen = new Persona(
  'Carmen',
  'Valencia Aguilar',
  32,
  '78988594N',
  new Date(1990, 4, 28),
  'verde',
  'mujer',
  [primeraResidenciaCarmen, segundaResidenciaCarmen],
  [mailCarmen],
  [telefonoFijoCarmen, telefonoMovilCarmen],
  "Trabaja en la localidad de la segunda residencia"
);

const primeraResidenciaLucho = new Direccion(
  "Calle Peralta",
  2,
  1,
  "A",
  29600,
  "Marbella",
  "Malaga"
)

const segundaResidenciaLucho = new Direccion(
  "Calle San Lorenzo",
  2,
  1,
  "A",
  08041,
  "Barcelona",
  "Barcelona"
)

const mailPersonalLucho = new Mail(
  "personal",
  "lucho@hotmail.com"
)


const telefonoFijoLucho = new Telefono(
  "fijo",
  988888945
)

const telefonoMovilLuchoPersonal = new Telefono(
  "movil",
  667777777
)



const datosLucho = new Persona(
  'Lucho',
  'Peralta',
  35,
  '22222222T',
  new Date(1988, 6, 26),
  'negro',
  'hombre',
  [primeraResidenciaLucho, segundaResidenciaLucho],
  [mailPersonalLucho],
  [telefonoFijoLucho, telefonoMovilLuchoPersonal],
  "Tiene la segunda residencia alquilada todo el año"
);


console.log("Contactos antes del cambio:");
console.log(datosCarmen);
console.log(datosLucho);

const agenda: Array<Persona> = new Array(datosCarmen, datosLucho);

const dniABuscar: string = "22222222T";

const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

const nuevaDireccion = new Direccion(
  "Passeig Maragall",
  25,
  5,
  false,
  08041,
  "Barcelona",
  "Barcelona"
)

const nuevoMail = new Mail(
  "trabajo",
  "lu_@gmail.com"
)

const nuevoTelefono = new Telefono(
  "fijo",
  952775522
)

personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);

console.log("Contactos después del cambio:");
console.log(datosCarmen);
console.log(datosLucho);