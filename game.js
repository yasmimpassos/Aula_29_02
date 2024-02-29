window.onload = function() {
    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        backgroundColor: "ff5da2",
        scene: [Cena01, Cena02, Cena03]
    };

    const game = new Phaser.Game(config);
}
