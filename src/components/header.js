import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {languageChanged} from "../actions/index";

class Header extends Component {
	render(){
		return (
			<div className="header">
                <div className="col-sm-12">
                    <div className="shadow" id="navbar">
                        <img 
                        	src="img/logo.png" 
                        />
                        <img 
                            onClick={() => this.props.languageChanged("FIN")}
                        	className={`flag clickable ${this.props.language == "FIN" && "selected"}`}
                        	src="img/finnish.png" 
                        />
                        <img 
                            onClick={() => this.props.languageChanged("ENG")}
                        	className={`flag clickable ${this.props.language == "ENG" && "selected"}`}
                        	src="img/english.png" 
                        />
                    </div>
                </div>
            </div>
		)
	}
}

function mapStateToProps({language}){
    return {language}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({languageChanged}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);