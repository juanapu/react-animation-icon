import React, { Component } from 'react';
import "public/style/public.less";
import "./index.less";
//change the icon to your icon
import { Icon } from 'antd';


export default class ButtonAni extends Component{
	constructor(props){
		super(props);
		this.state={
			clicked: false
		}
	}

	clickFunc(){
		this.setState({
			clicked: true
		})	
	}

	componentDidUpdate(){
		console.log("-- check -- update --");

		const _this = this;
		if(this.state.clicked){
			this.timeout = setTimeout(()=>{
				_this.setState({
					clicked: false
				});
			},2000);
		}

	}

	componentWillUnmount(){
		clearTimeout(this.timeout);
	}

	render(){
		return(
				<div onClick={this.clickFunc.bind(this)} className="buttonAni">
						<div className={this.state.clicked?"cus-btn cus-clicked-ani":"cus-btn"}>
						  {/* change the icon to your icon */}
              <Icon type="enter" />
						</div>
				</div>
			)
	}
}
