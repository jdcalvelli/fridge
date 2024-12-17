import p5 from "p5";

import state from "../state";

class fridgeNote {
	private p5Context: p5;
	private p5Image!: p5.Image;
	private dim: number = 16;
	x: number;
	y: number;
	num: number;

	constructor(_p5Context: p5, _x: number, _y: number, _num: number) {
		this.p5Context = _p5Context;
		this.x = _x;
		this.y = _y;
		this.num = _num;
	}

	onPreload() {
		this.p5Image = this.p5Context.loadImage("/note-white.png");
	}

	onSetup() {
		//this.p5Image.resize(16, 0);
	}

	onDraw() {
		this.p5Context.tint(255, 220);
		this.p5Context.image(this.p5Image, this.x, this.y, this.dim, this.dim);
		this.p5Context.noTint();
	}

	onClick() {
		// check distance from mouse to object using circle point for now
		if (
			this.p5Context.dist(
				this.x,
				this.y,
				this.p5Context.mouseX,
				this.p5Context.mouseY
			) < 14
		) {
			this.dim = 32;
			state.updateSelectedNote(this.num);
		} else {
			this.dim = 16;
		}
	}
}

export default fridgeNote;
