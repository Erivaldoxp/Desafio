let nome = "hiro"
let xp = 9000
let nivel = [["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"],
    [1000,2000,5000,7000,8000,9000,10000]]

if(xp < nivel[1][0]){
    console.log("O Herói de nome "+nome+ " está no nível de " +nivel[0][0])
}
else if(xp <= nivel[1][1]){
    console.log("O Herói de nome "+nome+ " está no nível de " +nivel[0][1])
}
else if(xp <= nivel[1][2]){
    console.log("O Herói de nome "+nome+ " está no nível de " +nivel[0][2])
}
else if(xp <= nivel[1][3]){
    console.log("O Herói de nome "+nome+ " está no nível de " +nivel[0][3])
}
else if(xp <= nivel[1][4]){
    console.log("O Herói de nome "+nome+ " está no nível de " +nivel[0][4])
}
else if(xp <= nivel[1][5]){
    console.log("O Herói de nome "+nome+ " está no nível de " +nivel[0][5])
}
else if(xp <= nivel[1][6]){
    console.log("O Herói de nome "+nome+ " está no nível de " +nivel[0][6])
}
else{
    console.log("O Herói de nome "+nome+ " está no nível de " +nivel[0][7])
}