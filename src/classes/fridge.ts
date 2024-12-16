import p5 from "p5";

class Fridge {
	private p5Context: p5;
	private p5Image!: p5.Image;
	x: number;
	y: number;

	constructor(_p5Context:p5, _x:number, _y:number) {
		this.p5Context = _p5Context;
		this.x = _x;
		this.y = _y;
	}

	onPreload() {
		this.p5Image = this.p5Context.loadImage("/fridge.png");
	}

	onSetup() {
	}	

	onDraw() {
		this.p5Context.image(this.p5Image, this.x, this.y);
	}

	onClick() {
	}

}

export default Fridge;