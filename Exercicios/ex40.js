function CaracterizacaoNotas (vetorNotas){
    for (i in vetorNotas){
        if (vetorNotas[i] <= 4.9 && vetorNotas > 0){return 'D'}
        else if (vetorNotas[i] <= 6.9 && vetorNotas >= 5.0){return 'C'}
        else if (vetorNotas[i] <= 8.9 && vetorNotas >= 7.0){return 'B'}
        else if (vetorNotas[i] <= 9.0 && vetorNotas >= 10.0){return 'A'}
    }
}