import React, { Component } from 'react';
import Albums from './Albums'
import Tweets from './Tweets'


class Artist extends Component{
	constructor(){
		super();
		this.state={
				}
}
	
	render(){
		return (		
			<div className="Artist">
                <Tweets/>
                <Albums/>
		    </div>	
		)
	}

}

export default Landing;