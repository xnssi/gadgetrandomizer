import axios from "axios";

/*
* Convert the price to Finnish standards
*/
export function convertToLocalEur(price){
	price = price.replace(".", ",");
	price = price.replace("EUR", "€");
	return price;
}

/*
* Shrink the title string so it fits the panel
*/
export function shrinkTheTitle(title){
	return title.replace(/^(.{22}[^\s]*).*/, "$1");
}

/*
* Check if this array contains this object
* (used to prevent duplicate content from entering favorites)
*/
export function containsObject(obj, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

/*
* Generate random keys for our elements so React can tell them apart
*/
export function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}

/*
* Insert a basic Product URL and convert it to an Affiliate URL
*/
export function getAffiliateLink(link){
    return `http://s.click.aliexpress.com/deep_link.htm?dl_target_url=${link}&aff_short_key=yVV7Mrr`;
}