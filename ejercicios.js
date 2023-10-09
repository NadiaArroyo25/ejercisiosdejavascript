

function imprimirPiramide(niveles) {
    
    for (let i = 1; i <= niveles; i++) {
        let fila = '';
        
        for (let j = 1; j <= i; j++) {
            fila += '* ';
        }
        console.log(fila);
    }
}


imprimirPiramide(5);












