import m from "mithril";
import p5 from "p5";

import Fridge from '../classes/fridge';
import fridgeNote from '../classes/fridgeNote';

 import state from "../state";

const WIN_WIDTH = 640;
const WIN_HEIGHT = 720;

const C_Sketch: m.Component = {
	oncreate(vnode) {
	    let element = vnode.dom as HTMLElement;

	    const sketch = (p: p5) => {
		    let fridge = new Fridge(p, WIN_WIDTH/2, WIN_HEIGHT/2);
		    let notes = [
		    	new fridgeNote(p, WIN_WIDTH/2 + 40, WIN_HEIGHT/2 + 110, 0),
		    	new fridgeNote(p, WIN_WIDTH/2 + 20, WIN_HEIGHT/2 - 4, 1),
		    	new fridgeNote(p, WIN_WIDTH/2 + 40, WIN_HEIGHT/2 - 80, 2),
		    	new fridgeNote(p, WIN_WIDTH/2 + 42, WIN_HEIGHT/2 + 10, 3),
		    	new fridgeNote(p, WIN_WIDTH/2 + 35, WIN_HEIGHT/2 + 40, 4),
		    	new fridgeNote(p, WIN_WIDTH/2 + 12, WIN_HEIGHT/2 + 38, 5),
		    	new fridgeNote(p, WIN_WIDTH/2 + 12, WIN_HEIGHT/2 - 65, 6),
		    	new fridgeNote(p, WIN_WIDTH/2 + 10, WIN_HEIGHT/2 - 92, 7),
		    	new fridgeNote(p, WIN_WIDTH/2 + 65, WIN_HEIGHT/2 - 95, 8),
		    	new fridgeNote(p, WIN_WIDTH/2 + 65, WIN_HEIGHT/2 + 92, 9),
		    	new fridgeNote(p, WIN_WIDTH/2 + 22, WIN_HEIGHT/2 + 84, 10),
		    	new fridgeNote(p, WIN_WIDTH/2 + 51, WIN_HEIGHT/2 + 68, 11),
		    	new fridgeNote(p, WIN_WIDTH/2 + 60, WIN_HEIGHT/2 + 30, 12),
		    	new fridgeNote(p, WIN_WIDTH/2 + 59, WIN_HEIGHT/2 - 6, 13),
		    	new fridgeNote(p, WIN_WIDTH/2 + 32, WIN_HEIGHT/2 - 110, 14),
		    ];

		    p.preload = () => {
		        fridge.onPreload();

		        notes.forEach((note) => {
		        	note.onPreload();
		        });
		    }

		    p.setup = () => {
		        p.createCanvas(WIN_WIDTH, WIN_HEIGHT);
		        p.imageMode(p.CENTER);

		        fridge.onSetup();
		        notes.forEach((note) => {
		        	note.onSetup();
		        });
		    }

		    p.draw = () => {
		        p.background("#F5F5F5");

		        fridge.onDraw();
		        notes.forEach((note) => {
		        	note.onDraw();
		        });
		    }

		    p.mousePressed = () => {
		    	if (p.mouseButton != p.LEFT) return
		    	// first check that we're actually in the sketch
		    	if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
		        	fridge.onClick();
			        
		        	state.updateSelectedNote(null);

			        notes.forEach((note) => {
			        	note.onClick();
			        });
		    	}
		    }
	    }

	    new p5(sketch, element);
	},

	view() {
		return m("#sketch")
	}
}

export default C_Sketch;