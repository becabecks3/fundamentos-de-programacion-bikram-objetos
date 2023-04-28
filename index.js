const Coche = {
    marca: 'Fiat',
    modelo: 'Picanto',
    matricula: 'E45J'
};
const Casa = {
    codPostal: '27018',
    calle: 'Mayor',
    portal: 7,
    piso: 2
};
const FullStackDeveloper = {
    lenguajes: ['Java', 'C++', 'Python'],
    proyectos: ['Web', 'App', 'Portfolio']
};
const Perro = {
    nombre: 'Pecas',
    raza: 'Border Collie',
    color: 'Blanco',
    edad: 7,
    ladrar: function ladrar() {
        console.log('guau');
    }, 
    popo: function popo() {
        return Math.random() * 3;
    }

};

const marcaPortatil = Portatil.marca;

const marcaPortatil2 = Portatil['marca'];

const grupos = Concierto['grupos'];

const RGB = [Led.rojo, Led.verde, Led.azul];

Portatil['modelo'] = 'P345';

Concierto.cartelera.push("Guns N' Roses")
Concierto.fecha = new Date();

Impresora.imprimiendo = {
    nombreArchivo: 'Cuentas',
    copias: 3,
    numPaginas: 100
};
const Noticia = {
    titular: 'Partido',
    cuerpo: 'Lorem ipsum'
};
const Persona = {
    nombre: 'Rebeca',
    apellidos: 'Arrogante Ramirez',
    edad: 30
};
const Avion = {
    numPasajeros: 200,
    despegar: function despegar() {
        console.log('despegando');
    },
    volar: function volar(){
        console.log('llegando al destino')
    },
    aterrizar: function aterrizar() {
        console.log('aterrizando');
    }
};
const Paquete = {
    contenido: ['ropa', 'ordenador', 'toalla']
};
const Pais = {
    numHabitantes: 300000,
    continente: 'Eurpa',
    gentilicio: 'Español'
};
const codError = O_Error.codigo;
const integrantes = Grupo.integrantes;
const nivelesTinta = Impresora.tinta;
const pixeles = Pantalla['bidimensional', 'pixeles'];
const especificaciones = Movil['especificaciones'];
Grupo.numIntegrantes = 5;
Pantalla.dimensiones = '1920x1080';
Led.encendido = !Led.encendido;
Movil.temperatura = '20º';

