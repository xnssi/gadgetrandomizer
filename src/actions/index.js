import axios from "axios";

export const GET_NEW_ITEM = "GET_NEW_ITEM";
export const ITEM_SELECTED = "ITEM_SELECTED";
export const ITEM_FAVORITED = "ITEM_FAVORITED";
export const CLEAR_FAVORITES = "CLEAR_FAVORITES";
export const CLEAR_ITEMS = "CLEAR_ITEMS";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_AFFILIATE_LINK = "GET_AFFILIATE_LINK";
export const LANGUAGE_CHANGED = "LANGUAGE_CHANGED";

export function getNewItem(){
	const apiCategories = [
		"100000308", // Home Audio & Video Equipments
		"100000306", // Portable Audio & Video
		"200003803", // Smart Electronics
		"100001202", // Telephones & Accessories
		"1511", // Watches
		"200003411", // Interior accessories for cars
		"200001083", // Laptop accessories
		"200001085" // Tablets & PDAs Accessories
	]; 

	const API_URL_BASE = "https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/76547?localCurrency=EUR&categoryId=";
	const API_URL_CAT = apiCategories[Math.floor(Math.random()*apiCategories.length)];
	const API_URL_LANG = "&language=en";

	const request = axios.get(API_URL_BASE + API_URL_CAT + API_URL_LANG);

	return {
		type: GET_NEW_ITEM,
		payload: request
	}
}

export function itemFavorited(item){
	return {
		type: ITEM_FAVORITED,
		payload: item
	}
}

export function clearFavorites(){
	return {
		type: CLEAR_FAVORITES,
		payload: null
	}
}

export function clearItems(){
	return {
		type: CLEAR_ITEMS,
		payload: null
	}
}

export function deleteFavorite(favorite){
	return {
		type: DELETE_FAVORITE,
		payload: favorite
	}
}

export function languageChanged(language){
	return {
		type: LANGUAGE_CHANGED,
		payload: language
	}
}