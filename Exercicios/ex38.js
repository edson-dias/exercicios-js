function InicioFim (inicio=0, fim=100){
    if (fim < inicio){
       let inicio_v = fim 
       let fim_v = inicio
    }
    else{
        let inicio_v = inicio
        let fim_v = fim
    }

    for (inicio_v; inicio_v < fim_v; inicio_v++){
        if(inicio_v%2 == 1){
            console.log(inicio_v)
        }
    }
}

InicioFim()
