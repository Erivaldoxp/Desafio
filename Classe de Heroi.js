class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        
    }
    
    
        atacar(){
            let ataque
            if(this.tipo === "guerreiro"){
                ataque = "espada"
            }else if(this.tipo === "mago"){
                ataque = "magia"
            }else if(this.tipo === "monge"){
                ataque = "arte marciais"
            }else if(this.tipo === "ninja"){
                ataque = "shuriken"
            }else{
                ataque = "ataque desconhecido"
            }

            console.log(`O ${this.tipo} atacou usuando ${ataque}`)
            
        }
    }
let heroi = new Heroi("mord",33,"guerreiro")
heroi.atacar()

let heroi1 = new Heroi("gendau", 200,"mago")
heroi1.atacar()

let heroi2 = new Heroi("aing", 80,"monge")
heroi2.atacar()

let heroi3 = new Heroi("naruto",17,"ninja")
heroi3.atacar()