quantVitoriaOrDerrota(101,0)
let rank

if(resultado < 10){
    rank = "Ferro"
    console.log("O Herói tem de saldo de vitoria "+resultado+ " e está no nível de "+rank)
}
else if(resultado <= 20){
    rank = "Bronze"
    console.log("O Herói tem de saldo de vitoria "+resultado+ " e está no nível de "+rank)
}
else if(resultado <= 50){
    rank = "Prata"
    console.log("O Herói tem de saldo de vitoria "+resultado+ " e está no nível de "+rank)
}
else if(resultado <= 80){
    rank = "Ouro"
    console.log("O Herói tem de saldo de vitoria "+resultado+ " e está no nível de "+rank)
}
else if(resultado <= 90){
    rank = "Dinamite"
    console.log("O Herói tem de saldo de vitoria "+resultado+ " e está no nível de "+rank)
}
else if(resultado <= 100){
    rank = "Lendário"
    console.log("O Herói tem de saldo de vitoria "+resultado+ " e está no nível de "+rank)
}else if(resultado >= 101){
    rank = "Imortal"
    console.log("O Herói tem de saldo de vitoria "+resultado+ " e está no nível de "+rank)
}




function quantVitoriaOrDerrota(vitorias, derrotas){
    resultado  = vitorias - derrotas
    return resultado
}
