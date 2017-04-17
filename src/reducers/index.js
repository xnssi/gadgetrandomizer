import ItemsReducer from "./reducer_items";
import FavoritesReducer from "./reducer_favorites";
import LanguageReducer from "./reducer_language";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  items: ItemsReducer,
  favorites: FavoritesReducer,
  language: LanguageReducer
});

export default rootReducer;