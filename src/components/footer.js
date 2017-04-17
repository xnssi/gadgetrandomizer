import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Footer extends Component {
	renderSignature(){
		let signature = "";
		if (this.props.language == "ENG")
			signature = <div id="signature">React & Redux practice project by <a target="_blank" href="https://fi.linkedin.com/in/ahautaviita">Anssi</a></div>;
		else 
			signature = <div id="signature"><a target="_blank" href="https://fi.linkedin.com/in/ahautaviita">Anssin</a> React & Redux -harjoitusprojekti</div>;
		return signature;
	}

	render(){
		return (
			<div className="col-sm-12">
                <p id="signature">
                	{this.renderSignature()}
                </p>
            </div>
		)
	}
}

function mapStateToProps({language}){
    return {language}
}

export default connect(mapStateToProps)(Footer);