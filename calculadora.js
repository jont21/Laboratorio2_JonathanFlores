let calcSurface=(figure)=>{
    const surfaces= require('./surface.js');
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
     //Validar la figura.
     switch (figure) {
         case 'cuadrado':
             process.stdout.write('Ingrese el lado del cuadrado:');
             process.stdin.on('data',(chunk) =>{ 
             let lado=parseFloat(chunk);
             let surface = surfaces.cuadrado(lado);
             process.stdout.write(`La superficie del cuadrado es: ${surface} metros cuadrados\n`);
             process.stdin.destroy();   
             });
             break;

             case 'triangulo':
                    process.stdout.write('Ingrese la base y la altura del triangulo, separados por un espacio:');
                    process.stdin.on('data',(chunk) =>{ 
                    let baseAndHeight = chunk.split(' ');
                    let base = parseFloat(baseAndHeight[0]);
                    let height = parseFloat(baseAndHeight[1]);
                    let surface = surfaces.triangulo(base, height);
                    process.stdout.write(`La superficie del triagulo es: ${ surface } metros cuadrados.\n`);
                    process.stdin.destroy();   
                    });
                    break;

                    case 'circulo':
                            process.stdout.write('Ingrese el radio del circulo:');
                            process.stdin.on('data',(chunk) =>{ 
                            var surface = surfaces.circulo(parseFloat(chunk));
                            process.stdout.write(`La superficie del circulo es: ${ surface } metros cuadrados.\n`);
                            process.stdin.destroy();   
                            });
                            break;

                    case 'rectangulo':
                            process.stdout.write('Ingrese la base y la altura del rectangulo,separada por un espacio: ');
                            process.stdin.on('data',(chunk) =>{ 
                                let baseAndHeight = chunk.split(' ');
                                let base = parseFloat(baseAndHeight[0]);
                                let height = parseFloat(baseAndHeight[1]);
                                let surface = surfaces.rectangulo(base, height);
                            process.stdout.write(`La superficie del rectangulo es: ${ surface } metros cuadrados\n`);
                            process.stdin.destroy();   
                            });
                            break;

                            case 'elipse':
                                process.stdout.write('Ingrese la base y la altura del elipse,separada por un espacio: ');
                                process.stdin.on('data',(chunk) =>{ 
                                    let baseAndHeight = chunk.split(' ');
                                    let base = parseFloat(baseAndHeight[0]);
                                    let height = parseFloat(baseAndHeight[1]);
                                    let surface = surfaces.elipse(base, height);
                                process.stdout.write(`La superficie de la elipse es: ${ surface } metros cuadrados\n`);
                                process.stdin.destroy();   
                                });
                                break;

                            
         default:
                process.stdout.write('Opcion no valida, intente de nuevo.\n');
                process.exit();
             break;
     }
}
calcSurface(process.argv[2]);
process.on('exit', ()=> {
    process.stdout.write('Hasta la proxima\n');
});