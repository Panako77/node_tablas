
const argv = require('./config/yargs');
const { crearTablaTxt } = require('./helpers/multiplicar');
const colors = require('colors');


console.clear();


// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);

// const base = argv.base;



// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// console.log( base );

// const base = 6;

crearTablaTxt( argv.base, argv.l, argv.h, )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado'.green.underline))
    .catch( err => console.log( err.underline.red ))
