import {GET_NEW_ITEM, CLEAR_ITEMS, GET_AFFILIATE_LINK} from "../actions/index";

import {guid, getAffiliateLink} from "../actions/helpers";

export default function(state = [], action){
	switch(action.type){
		case GET_NEW_ITEM:
			// The API always returns an array of 100 "hot" products
			// - we need to randomly pick one of them
			let randomInt = Math.floor((Math.random() * 100) + 1);
			let items = action.payload.data.result.products;

			// Sometimes the AliExpress API returns a null object - 
			// we need to have a failsafe for that
			if (items[randomInt] == null) {
				while (items[randomInt] == null) {
					randomInt = Math.floor((Math.random() * 100) + 1);
				}
			}

			// Generate a random ID for the item for React rendering purposes
			items[randomInt].itemId = guid();

			// Generate the affiliate link
			items[randomInt].affiliateLink = getAffiliateLink(items[randomInt].productUrl);

			let pl = [];
			pl.push(items[randomInt]);

			return pl.concat(state);
		// end case GET_NEW_ITEM

		case CLEAR_ITEMS:
			state = [];
			return state;
	}

	return state;
}