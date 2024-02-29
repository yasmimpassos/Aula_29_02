class Cena02 extends Phaser.Scene {
    constructor() {
        super('Cena02');
    }

    init(data) {
        this.playerName = data.playerName;
    }

    preload() {

    }

    create() {
        this.text = this.add.text(300, 100, "Qual seu nome?", { fill: '#333' });
        this.text = this.add.text(300, 150, this.playerName, { fill: '#333' });
        this.text = this.add.text(300, 200, `Cê tá bom? ${this.playerName}? `, { fill: '#333' });
        // Serve para exibir o overlay de entrada
        document.getElementById('input2').style.display = 'block';

        // Configura o evento de clique no botão
        document.getElementById('startButton2').addEventListener('click', () => {
            const resposta = document.getElementById('nameInput2').value;
            this.scene.start('Cena03', { resposta: resposta, playerName: this.playerName });
            // Oculta o overlay após iniciar
            document.getElementById('input2').style.display = 'none';
        });
        this.cameras.main.setBackgroundColor('#B983FF');
    }

}