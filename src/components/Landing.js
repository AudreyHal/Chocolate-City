import React, { Component } from 'react';
import Artists from './Artists'
import Artist from './Artist'
import { connect } from 'react-redux';
import { addParams } from '../redux/actions/action';


class Landing extends Component{
	constructor(){
		super();
		this.state={
      showUser: false,
      user:[]
    }
}

componentDidMount=()=>{
  console.log( "udududud" + this.props.data.title)
}

selectedUser = (childData) => {
  this.setState({user: childData, showUser: true})
  
}
 
	
	render(){
    const showUser = this.state.showUser;
		return (		
			<div className="Landing">
               
        {showUser ? (
          <Artist user={this.state.user} />         
        ) : (
          <Artists onSelect = {this.selectedUser}/>
        )}  
		    </div>	
		)
	}

}

// export default Landing;
const mapStateToProps = state => {
	return {
	  data: state.data
	};
  };
  

  export default connect(mapStateToProps, null)(Landing);