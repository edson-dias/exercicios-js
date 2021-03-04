function CalcFatorial(n){
    if (n>1){      
        return n * CalcFatorial(n-1)
    }
    else{
        return n
    }
}


a = CalcFatorial(5)
console.log(a)
