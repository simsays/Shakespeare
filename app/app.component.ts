import { Component, OnInit } from '@angular/core';
import { Line } from './line';
import { Dropdown } from './dropdown.component';
import { Scene } from './scene';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent implements OnInit {
	lines: Line[];
	highlightVowels: boolean;
	countSyllables: boolean;
	sceneToDisplay: Scene; 
	scenes: Scene[];

	constructor() {
		this.lines = [];
	}

	ngOnInit(): void {
		this.scenes = [];
		let linesAct1Scene1: Line[] = [];
		linesAct1Scene1.push(new Line("So have I heard and do in part believe it.", 11));
		linesAct1Scene1.push(new Line("But, look, the morn, in russet mantle clad,", 10));
		linesAct1Scene1.push(new Line("Walks o'er the dew of yon high eastward hill:", 10));
		linesAct1Scene1.push(new Line("Break we our watch up; and by my advice,", 10));
		linesAct1Scene1.push(new Line("Let us impart what we have seen to-night", 10));
		linesAct1Scene1.push(new Line("Unto young Hamlet; for, upon my life,", 10));
		linesAct1Scene1.push(new Line("This spirit, dumb to us, will speak to him.", 10));
		linesAct1Scene1.push(new Line("Do you consent we shall acquaint him with it,", 11));
		linesAct1Scene1.push(new Line("As needful in our loves, fitting our duty?", 11));

		let initialScene: Scene = new Scene(1,1, linesAct1Scene1);
		this.sceneToDisplay = initialScene
		this.scenes.push(initialScene);

		let linesAct1Scene2: Line[] = [];
		linesAct1Scene2.push(new Line("Though yet of Hamlet our dear brother's death", 10));
		linesAct1Scene2.push(new Line("The memory be green, and that it us befitted", 13));
		linesAct1Scene2.push(new Line("To bear our hearts in grief and our whole kingdom", 11));
		linesAct1Scene2.push(new Line("To be contracted in one brow of woe,", 10));
		linesAct1Scene2.push(new Line("Yet so far hath discretion fought with nature", 11));
		linesAct1Scene2.push(new Line("That we with wisest sorrow think on him,", 10));
		linesAct1Scene2.push(new Line("Together with remembrance of ourselves.", 10));

		this.scenes.push(new Scene(1,2, linesAct1Scene2));

		let linesAct2Scene1: Line[] = [];

		linesAct2Scene1.push(new Line("Marry, well said; very well said. Look you, sir,", 11));
		linesAct2Scene1.push(new Line("Inquire me first what Danskers are in Paris;", 11));
		linesAct2Scene1.push(new Line("And how, and who, what means, and where they keep,", 10));
		linesAct2Scene1.push(new Line("What company, at what expense; and finding", 11));
		linesAct2Scene1.push(new Line("By this encompassment and drift of question", 11));
		linesAct2Scene1.push(new Line("That they do know my son, come you more nearer", 11));
		linesAct2Scene1.push(new Line("Than your particular demands will touch it:", 11));
		linesAct2Scene1.push(new Line("Take you, as 'twere, some distant knowledge of him;", 11));
		linesAct2Scene1.push(new Line("As thus, 'I know his father and his friends,", 10));
		linesAct2Scene1.push(new Line("And in part him: ' do you mark this, Reynaldo?", 11));

		this.scenes.push(new Scene(2,1, linesAct2Scene1));
	}
	
	selectSceneToDisplay(scene: Scene){

	}

	toggleCountSyllables(): void {
		this.countSyllables = !this.countSyllables;
	}
}