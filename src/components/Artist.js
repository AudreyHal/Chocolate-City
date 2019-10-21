import React, { Component } from 'react';
import Albums from './Albums'
import { connect } from 'react-redux';
import { addParams } from '../redux/actions/action';


class Artist extends Component{
	constructor(props){
		super(props);
		this.state={
    }
}

componentDidMount=()=>{
    console.log(this.props.user)
		
}
	
	render(){
        const dataItems = this.props.data.map((item, index) =>
        <li key={ index }>
    <b>{ item.title }</b>
    
    
    <span>{ item.content }</span>
</li>)
		return (		
			<div className="Artist">
              <h1>{this.props.user.name}</h1>
              <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Albums</th>
                  <th scope="col">Tweets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{this.props.user.username}</td>
                  <td>{this.props.user.email}</td>
                  <td>{this.props.user.phone}</td>
                  <td><a> View More</a></td>
                  <td><a> View More</a></td>
                </tr>
               
              </tbody>
            </table>

           

		    </div>	
		)
	}

}


const mapStateToProps = state => {
	return {
	  data: state.data
	};
  };
  

  export default connect(mapStateToProps, null)(Artist);