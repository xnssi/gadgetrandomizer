import React, { Component } from 'react';

import ItemsList from "./items_list";
import ItemDetail from "./item_detail";
import Favorites from "./favorites";
import Header from "./header";
import Footer from "./footer";

export default class App extends Component {
  render() {
    return (
    	<div>
            <Header />
            <div className="col-sm-3 hidden-xs">
                <ItemsList />
            </div>
            <div className="col-sm-6">
              <ItemDetail />
            </div>
    		<div className="visible-xs">
		      	<ItemsList />
		    </div>
            <div className="col-sm-3">
                <Favorites />
            </div>
            <Footer />
    	</div>
    );
  }
}
