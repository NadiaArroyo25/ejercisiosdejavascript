
    
function imprimirPiramide(niveles) {
    for (let i = 0; i <= niveles; i++) {
        let fila = '* '.repeat(i)
        console.log(fila)
    }

        for (let i = niveles-1; i >= 0; i--) {
           let fila = '* '.repeat(i)
        
        console.log(fila);
    }
}
imprimirPiramide(5);











