function DivisorCedulas(valor){
    const cedulasArray = [100, 50, 10, 5, 1]
    let contadorCedulas = 0

    for (cedulas in cedulasArray){
        while (valor%cedulasArray[cedulas] < valor){
            contadorCedulas = contadorCedulas + Math.floor(valor/cedulasArray[cedulas])
            valor = valor%cedulasArray[cedulas]        
        }
        if (valor == 0){
            console.log(`${contadorCedulas} de ${cedulasArray[cedulas]}`)
            break
        }
        else{
            if(contadorCedulas > 0){
                console.log(`${contadorCedulas} de ${cedulasArray[cedulas]}`)
                contadorCedulas = 0
            }
                
        }
        
    }
}

DivisorCedulas(80)