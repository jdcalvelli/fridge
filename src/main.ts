import "./style.css";

import m from "mithril";

import state from "./state";

import C_Sketch from "./components/C_Sketch";
import C_Info from "./components/C_Info";

const C_App: m.Component = {
	oncreate() {
		// fetch the data
		fetch("/thoughts.json")
			.then((res) => res.json())
			.then((data) => state.updateGameList(data.gameList))
			.catch((error) => console.error(error));
	},
	view() {
		return m("main", [m(C_Sketch), m(C_Info)]);
	},
};

m.mount(document.body, C_App);
