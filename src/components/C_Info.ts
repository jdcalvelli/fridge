import m from "mithril";

import state from "../state";

const C_Info: m.Component = {
	view() {
		if (state.correspondingGame == null) {
			return m("div", {id: "info"}, [
	    		m("h1", "welcome to vel's fridge - 2024 edition"),
	    		m("h3", "this is a celebration of the work of my students in liu's prototype studio class, fall 2024"),
	    		m("h3", "in the course, students were given a new prompt every week, and were tasked with making a game based on that prompt"),
	    		m("h3", "the students asked if they could give me a prompt in the final week, and i said yes"),
	    		m("h3", "they came up with: a game that incorporates one thing from all of the games from this semester "),
	    		m("h3", "so, this page is a collection of my favorite project from each student this semester, with some of my reflections on what makes each so great"),
	    		m("h3", "thanks for stopping by, click on a note on the fridge to explore their games")
	    	])
		}
		else {
			return m("div", {id: "info"}, [
	    		m("h1", `${state.correspondingGame.gameName}`),
	    		m("h2", `${state.correspondingGame.studentName}`),
	    		m("h3", `${state. correspondingGame.prompt}`),
	    		m("p", `${state. correspondingGame.reflections}`),
	    	])	
		}


	},
}

export default C_Info;

// game name
// student name
// prompt
// video rel link
// my reflections
// itch embed?