class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

      atacar() {
        let ataque;
        switch(this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou ataques diversos';
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const meuHeroi = new Heroi('Isis', 15, 'mago');
meuHeroi.atacar();