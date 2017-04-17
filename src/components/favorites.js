import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {clearFavorites, deleteFavorite} from "../actions/index";
import {convertToLocalEur, guid} from "../actions/helpers";

class Favorites extends Component {
	render(){
		return (
			<div className="favorites">
				<h2>
					{ this.props.language == "FIN" && `Suosikit (${this.props.favorites.length})` }
					{ this.props.language == "ENG" && `Favorites (${this.props.favorites.length})` }
				</h2>
				<p className="clickable" onClick={() => this.props.clearFavorites()}>
					{ this.props.language == "FIN" && `Tyhjennä` }	
					{ this.props.language == "ENG" && `Clear` }
				</p>
				<div className="shadow favorites-well">
					<ReactCSSTransitionGroup
			          transitionName="example"
				      transitionAppear={true}
				      transitionLeaveTimeout={300}
				      transitionAppearTimeout={300}
			          transitionEnterTimeout={300}>	
						{
							this.props.favorites.map((item) => {
								return (
									<div 
										className="panel panel-success"
										key={item.favId}
									>
										<div className="panel-heading">
											{convertToLocalEur(item.localPrice)}
											<i onClick={() => this.props.deleteFavorite(item)} className="material-icons pull-right delete-favorite">clear</i>
										</div>
										<div className="panel-body">
											<a 
												target="_blank"
												href={item.affiliateLink}
											>
												{item.productTitle}
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

function mapStateToProps({favorites, language}){
	return {favorites, language};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({clearFavorites, deleteFavorite}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);