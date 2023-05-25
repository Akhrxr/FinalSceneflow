class Scene1 extends Phaser.Scene {
    constructor() {
        super('scene1');
    }
    create(){
        this.cameras.main.setBackgroundColor('#a1e');

        this.add.text(1920/2 - 100,1080/2, "Welcome passanger...").setFontSize(75);
        this.add.text(1920/2,1080/2 + 200, "Go to next scene").setFontSize(25);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('scene2'));
        });
    }
}

class Scene2 extends Phaser.Scene {
    constructor() {
        super('scene2');
    }
    preload() {
    }
    create(){
        this.cameras.main.setBackgroundColor('#a1e');

        this.add.text(1920/2,1080/2, "Welcome to scene 2").setFontSize(50);
        this.add.text(50,100, "Click anywhere to go back to scene 1 \n (We'll have something where you can go back and forth between certain scenes)").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('scene1'));
            //this.startupsound.stop();
        });
    }

}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Scene1, Scene2],
    title: "Sceneflowprot",
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
});