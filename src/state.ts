import m from "mithril";

interface Game {
	gameName: string;
	studentName: string;
	prompt: string;
	imgSrc: string;
	reflections: string;
	itchLink: string;
}

const state: {
	gameList: Array<Game> | null;
	updateGameList: (arg: Array<Game>) => void;
	selectedNote: number | null;
	updateSelectedNote: (arg: number | null) => void;
} = {
	gameList: null,
	updateGameList: (arg) => {
		state.gameList = arg;
		m.redraw();
	},
	selectedNote: null,
	updateSelectedNote: (arg) => {
		state.selectedNote = arg;
		m.redraw();
	},
};

export default state;
