import {ITEM_FAVORITED, CLEAR_FAVORITES, DELETE_FAVORITE} from "../actions/index";
import {containsObject, guid} from "../actions/helpers";

export default function(state = [], action){
	switch(action.type){
		case ITEM_FAVORITED:
			// If favorites array is empty
			// -> add object to favorites
			// or
			// If favorites array is not empty, and this object is not yet favorited
			// -> add object to favorites
			if (state.length == 0 || !containsObject(action.payload, state)){
				let pl = [];
				action.payload.favId = guid();
				pl.push(action.payload);
				return pl.concat(state);
			}

			// If favorites array is not empty but this is already favorited
			// -> don't touch favorites
			else {
				return state;
			}

		case CLEAR_FAVORITES:
			state = [];
			return state;

		case DELETE_FAVORITE:
			state = state.filter((obj) => {return obj.favId !== action.payload.favId});
			return state;
	}

	return state;
}