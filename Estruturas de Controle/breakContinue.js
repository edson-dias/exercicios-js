const nums = [1, 2, 3, 4, 5, 6, 7]

for (x in nums){
    if(x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums){       // "Externo" é um rótulo para um laço.
    for (b in nums){            // Essa estrutura tem o uso desencorajado.
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
