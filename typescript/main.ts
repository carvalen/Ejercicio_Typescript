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

const mailCarmen = new Mail(
  "personal",
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

const primeraResidenciaNoelia = new Direccion(
  "Calle margarita ",
  1,
  8,
  "A",
  29600,
  "Fuengirola",
  "Malaga"
)

const segundaResidenciaNoelia = new Direccion(
  "Calle Albarizas",
  3,
  false,
  false,
  29603,
  "Marbella",
  "Malaga"
)

const mailNoelia = new Mail(
  "personal",
  "noelia@gmail.com"
)

const telefonoFijoNoelia = new Telefono(
  "fijo",
  992929222
)

const telefonoMovilNoelia = new Telefono(
  "movil",
  676767666
)

const datosNoelia = new Persona(
  'Noelia',
  'Aranda Ardilla',
  32,
  '78988584T',
  new Date(1990, 11, 26),
  'amarillo',
  'mujer',
  [primeraResidenciaNoelia, segundaResidenciaNoelia],
  [mailNoelia],
  [telefonoFijoNoelia, telefonoMovilNoelia],
  "Trabaja de lunes a viernes"
);

console.log("Contactos antes del cambio:");
console.log(datosCarmen);
console.log(datosLucho);
console.log(datosNoelia);


const agenda: Array<Persona> = new Array(datosCarmen, datosLucho, datosNoelia);

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
console.log(datosNoelia);