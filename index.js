class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
    showHero () {
        console.log("=".repeat(35))
        console.log(`O herói que você escolheu foi:\nNome: ${this.name}\nIdade: ${this.age}\nClasse: ${this.type}`)
        console.log("=".repeat(35))
    }
    attack() {
        let typeAttack
        if (this.type === "Mago") {
            typeAttack = "Magia"
        } else if (this.type === "Guerreiro") {
            typeAttack = "Espada"
        } else if (this.type === "Monge") {
            typeAttack = "Artes Marciais"
        } else if (this.type === "Ninja") {
            typeAttack = "Shuriken"
        }
        console.log(`O ${this.type} atacou usando ${typeAttack}.\n`)
    }
}
let selectWarrior = new hero("Bardo Pond", 28, "Guerreiro")
let selectMage = new hero("Tamara di Amstagi", 215, "Mago")
let selectMonk = new hero("Josias The Wanderer", 43, "Monge")
let selectNinja = new hero("Lidice Kill", 19, "Ninja")

let heroesList = [selectWarrior, selectMage, selectMonk, selectNinja]

for (let i=0; i < heroesList.length; i++) {
    if (heroesList[i].type === "Mago") {
        selectMage.showHero()
        selectMage.attack()
    } else if (heroesList[i].type === "Guerreiro") {
        selectWarrior.showHero()
        selectWarrior.attack()  
    } else if (heroesList[i].type === "Monge") {
        selectMonk.showHero()
        selectMonk.attack()  
    } else if (heroesList[i].type === "Ninja") {
        selectNinja.showHero()
        selectNinja.attack()  
    }
}