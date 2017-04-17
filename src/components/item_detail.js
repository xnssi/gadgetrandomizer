import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getNewItem, itemFavorited} from "../actions/index";

import {convertToLocalEur} from "../actions/helpers";

class ItemDetail extends Component {
	constructor(props){
		super(props);

		// 'clicked' state will indicate, when "Get a new item" button
		// has been clicked, but the result hasn't yet loaded
		this.state = {
			clicked: false
		}
	}
	
	componentDidMount(){	
		if (this.props.items.length == 0){
			this.props.getNewItem();
		}
	}

	// When the API response arrives, change state back to false
	componentWillReceiveProps(){
		this.setState({clicked: false})
	}

	render(){		
		if (this.props.items.length == 0){
			return (
				<div className="shadow current-item">
					<img id="loading-gif" src="img/ring.gif" />				
				</div>
			)
		}

		else {
			return (
				<div className="shadow current-item">
					<div className="row">
						<div className="col-sm-12 col-md-8">
							<div className="current-img">
								<img src={this.props.items[0].imageUrl} />
							</div>
						</div>
						<div className="col-sm-12 col-md-4">
							<div className="row">
								<div className="col-sm-12 col-xs-9">
									<h2>{this.props.items[0].productTitle}</h2>
								</div>
								<div className="col-sm-12 col-xs-3">
									<button 
										className="favorite" 
										onClick={() => this.props.itemFavorited(this.props.items[0])}
									>
										<i className="material-icons">favorite</i>
									</button>
								</div>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="price">
								{convertToLocalEur(this.props.items[0].localPrice)}
							</div>
							<a 
								target="_blank"
								href={this.props.items[0].affiliateLink} 
								className="siirry"
							>
								{this.props.language == "FIN" && "Siirry"}
								{this.props.language == "ENG" && "View"}
							</a>
						</div>
						<div className="col-sm-12">
							<button 
								onClick={ () => {this.setState({clicked: "eyy"}); this.props.getNewItem()} } 
								className="new-item"
							>
								{ this.state.clicked && <img src="img/loading.svg" id="loading-item" /> }
								{ !this.state.clicked && this.props.language == "FIN" && <span>Uusi tuote</span> }
								{ !this.state.clicked && this.props.language == "ENG" && <span>New item</span> }
							</button>
						</div>
					</div>
				</div>
			)
		}
	}
}

function mapStateToProps({items, language}){
	return {items, language}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getNewItem, itemFavorited}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);