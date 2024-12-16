import "./style.css";

import m from "mithril";

import C_Sketch from "./components/C_Sketch";
import C_Info from "./components/C_Info";

const C_App: m.Component = {
	view() {
		return m("main", [
			m(C_Sketch),
			m(C_Info)
		])
	}
}

m.mount(document.body, C_App);