import {LANGUAGE_CHANGED} from "../actions/index";

export default function(state = "ENG", action){
	switch(action.type){
		case LANGUAGE_CHANGED:
			state = action.payload;
			return state;
	}

	return state;
}