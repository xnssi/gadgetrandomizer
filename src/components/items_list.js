import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {convertToLocalEur, shrinkTheTitle} from "../actions/helpers";
import {clearItems, getNewItem} from "../actions/index";

class ItemsList extends Component {
	render(){
		if (this.props.items.length == 0){
			return (
				<div>
					<h2>
						{ this.props.language == "FIN" && `Edelliset (${this.props.items.length})` }
						{ this.props.language == "ENG" && `Previous (${this.props.items.length})` }
					</h2>
					<p className="clickable" onClick={() => {this.props.clearItems(); this.props.getNewItem()}}>
						{ this.props.language == "FIN" && `Tyhjennä` }	
						{ this.props.language == "ENG" && `Clear` }
					</p>
					<div className="shadow edelliset-well">
					</div>
				</div>
			)
		} 

		else {
			return(
				<div className="itemsList">
					<h2>
						{ this.props.language == "FIN" && `Edelliset (${this.props.items.length})` }
						{ this.props.language == "ENG" && `Previous (${this.props.items.length})` }
					</h2>
					<p className="clickable" onClick={() => {this.props.clearItems(); this.props.getNewItem()}}>
						{ this.props.language == "FIN" && `Tyhjennä` }	
						{ this.props.language == "ENG" && `Clear` }
					</p>
					<div className="shadow edelliset-well">
						<ReactCSSTransitionGroup
				          transitionName="example"
					      transitionAppear={true}
					      transitionLeaveTimeout={0}
					      transitionAppearTimeout={300}
				          transitionEnterTimeout={300}
				        >							
							{
								this.props.items.map((item) => {
									return (
										<div 
											className="panel panel-success" 
											key={item.itemId} 
										>
											<div className="panel-heading">
												{convertToLocalEur(item.localPrice)}
											</div>
											<div className="panel-body">
												<a 
													href={item.affiliateLink}
													target="_blank"
												>
													{shrinkTheTitle(item.productTitle)}..
												</a>
											</div>
										</div>
									)
								})
							}
						</ReactCSSTransitionGroup>
					</div>
				</div>
			)
		}
	}
}

function mapStateToProps({items, language}){
	return {items, language};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({clearItems, getNewItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);