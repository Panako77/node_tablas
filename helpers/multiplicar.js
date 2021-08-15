const fs = require('fs');
const colors = require('colors');



const crearTablaTxt = async( base = 5, listar = false, hasta = 10) => {
    
    try {    
        
        let salida = '';
        let consola = '';
        
        for (let index = 1; index <= hasta; index++) {
            const element = base * index;
            salida += (`${base} x ${index} = ${base * index}\n`);  
            consola += `${colors.blue(base)} ${'x'.green} ${colors.grey(index)} ${'='.green} ${colors.red.bold(element)}\n`;  
            
        }
    
        if ( listar ){
            console.log('=================='.rainbow);
            console.log('    Tabla del:'.yellow.italic.bold , colors.blue.bold( base ) );
            console.log('=================='.rainbow);
            console.log( consola );
        }            
            
        // fs.writeFile( `tabla_${base}.txt`, salida, (err) => {

        //     if (err) throw err;
        //     console.log( `tabla_${base}.txt` );
        // })

        fs.writeFileSync( `./salida/tabla_${base}.txt`, salida );
        return( `tabla_${base}.txt` );
        
    } catch (error) {
        
        throw( error );
    }



    // fs.writeFile( `tabla_${base}.txt`, salida, ( err ) => {
    //     if (err) throw err;
    //     console.log( `tabla del ${base}.txt creada` );
    // });

}

module.exports = {
    crearTablaTxt  // no se crea como 'crearTablaTxt: crearTablaTxt' xq es redundante
}