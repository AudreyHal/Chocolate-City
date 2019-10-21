import React, { Component } from 'react';
import Artists from './Artists'



class Landing extends Component{
	constructor(){
		super();
		this.state={
				}
}
	
	render(){
		return (		
			<div className="Landing">
        <Artists/>
		    </div>	
		)
	}

}

export default Landing;