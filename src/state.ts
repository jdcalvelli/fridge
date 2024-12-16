import m from "mithril";

import thoughts from "./data/thoughts.json";

interface Game {
	gameName: string,
	studentName: string,
	prompt: string,			
	reflections: string 
} 

const state: {
		correspondingGame: Game | null,
		selectedNote: number | null,
		updateSelectedNote: (arg: number | null) => void,
	} = {
	correspondingGame: null,
	selectedNote: null,
	updateSelectedNote: (arg) => {
		state.selectedNote = arg;
		
		state.correspondingGame = thoughts.gameList[state.selectedNote!];

		m.redraw();
	},
}

export default state;