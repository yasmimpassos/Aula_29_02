class Cena03 extends Phaser.Scene {
    constructor() {
        super('Cena03');
    }

    init(data) {
        this.playerName = data.playerName;
        this.resposta = data.resposta;
    }

    preload() {
        this.load.image("godoi", "./assets/Godoi.png");
    }


    create() {
        this.text = this.add.text(300, 50, "Qual seu nome?", { fill: '#333' });
        this.text = this.add.text(300, 100, this.playerName, { fill: '#333' });
        this.text = this.add.text(300, 150, `Cê tá bom? ${this.playerName}? `, { fill: '#333' });
        this.text = this.add.text(300, 200, this.resposta, { fill: '#333' });
        this.text = this.add.text(300, 250, `cê é fi de quem ${this.playerName}?`, { fill: '#333' });

        var godoi = this.add.image(50, 200, "godoi");
        godoi.setAngle(60);
        this.cameras.main.setBackgroundColor('#D1D1D1'); // Substitua '#FF0000' pela cor desejada em formato hexadecimal
        

    }

}