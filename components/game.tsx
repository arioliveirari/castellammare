import styles from '../styles/Home.module.css';
import { useEffect, useRef, useState } from 'react'
import Header from '../components/globals/Header'

export type GameProps = {
  id: number,
}

export type DragGame = {
  selectedItem: Phaser.GameObjects.Image | null,
  droppingItem: Phaser.GameObjects.Image | null,
  questions: Phaser.GameObjects.Image[],
  answers: Phaser.GameObjects.Image[],
  graphics: Phaser.GameObjects.Graphics,
}

function preload(this: Phaser.Scene) {
  this.load.setBaseURL('/');

  this.load.image('planet', 'images/planet4.png');
}

function create(this: Phaser.Scene & DragGame) {
  this.questions = [];
  this.answers = [];
  this.selectedItem = null;
  this.droppingItem = null;
  this.graphics = this.add.graphics();

  this.questions.push(this.add.image(200, 200, 'planet').setScale(0.5).setTint(0xffff).setInteractive());
  this.questions.push(this.add.image(220, 220, 'planet').setScale(0.5).setTint(0xffff).setInteractive());
  this.questions.push(this.add.image(220, 400, 'planet').setScale(0.5).setTint(0xffff).setInteractive());

  this.answers.push(this.add.image(400, 400, 'planet').setScale(0.5).setInteractive());
  this.answers.push(this.add.image(100, 100, 'planet').setScale(0.5).setInteractive());
  this.answers.push(this.add.image(600, 400, 'planet').setScale(0.5).setInteractive());

  const scene = this;
  /*
  for (let index = 0; index < this.questions.length; index++) {
    const question = this.questions[index];
    question.on('pointerover', function (this: Phaser.GameObjects.Image, event: any) {
      // this.setTint(0xff0000);
    });

    question.on('pointerout', function (this: Phaser.GameObjects.Image, event: any) {
      // this.clearTint();
    });
  }
  */

  for (let index = 0; index < this.answers.length; index++) {
    const answer = this.answers[index];
    answer.on('pointerover', function (this: Phaser.GameObjects.Image, event: any) {
      this.setTint(0xff0000);
    });

    answer.on('pointerdown', function (this: Phaser.GameObjects.Image, event: any) {
      scene.selectedItem = this;
    });

    answer.on('pointerup', function (this: Phaser.GameObjects.Image, event: any) {
      scene.selectedItem = null;
      if (scene.droppingItem) {
        this.x = scene.droppingItem.x;
        this.y = scene.droppingItem.y;
        scene.droppingItem = null;
      }
    });

    answer.on('pointerout', function (this: Phaser.GameObjects.Image, event: any) {
      this.clearTint();
    });
  }
}


function update(this: Phaser.Scene & DragGame) {
  let selectedItemBounds = null
  if (this.selectedItem != null) {
    this.selectedItem.x = this.game.input.mousePointer.x;
    this.selectedItem.y = this.game.input.mousePointer.y;
    selectedItemBounds = this.selectedItem.getBounds();
  };

  this.graphics.clear();
  for (let index = 0; index < this.answers.length; index++) {
    const bounds = this.answers[index].getBounds();
    this.graphics.lineStyle(1, 0xffff00);
    this.graphics.strokeRectShape(bounds);
  }

  if (selectedItemBounds) {
    let overlapsObjects: Phaser.GameObjects.Image[] = [];
    for (let index = 0; index < this.questions.length; index++) {
      const bounds = this.questions[index].getBounds();
      this.graphics.lineStyle(1, 0xffffff);
      this.graphics.strokeRectShape(bounds);

      if (Phaser.Geom.Intersects.RectangleToRectangle(bounds, selectedItemBounds)) {
        this.graphics.lineStyle(1, 0xffff66);
        this.graphics.strokeRectShape(bounds);
        overlapsObjects.push(this.questions[index]);
      }
    }
    if(overlapsObjects.length) this.droppingItem = overlapsObjects[0];
    else this.droppingItem = null;
  }
}

const Game = (props: GameProps) => {
  const phaserRef = useRef(null);
  const [phaser, setPhaser] = useState<typeof Phaser | null>(null);
  const [game, setGame] = useState<Phaser.Game | null>(null);

  useEffect(() => {
    async function fetchData() {
      //@ts-ignore
      if(window.Phaser) setPhaser(window.Phaser);
      else import('phaser').then(setPhaser);
    };
    fetchData();
    return () => {
      game?.destroy(true);
    }
  }, []);

  useEffect(() => {
    if (phaserRef && phaserRef.current && phaser) {
      var config: Phaser.Types.Core.GameConfig = {
        parent: phaserRef.current,
        type: Phaser.AUTO,
        scale: {
          mode: Phaser.Scale.RESIZE,
        },
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 }
          }
        },
        // @ts-ignore
        scene: {
          preload: preload,
          create: create,
          update: update,
        }
      };
      setGame(new phaser.Game(config));
    }
  }, [phaserRef, phaser]);

  return (
    <div className={styles.game} ref={phaserRef} />
  )
}

export default Game;
