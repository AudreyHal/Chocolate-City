import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { addParams } from '../redux/actions/action';



import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
	const options = {
		selectableRows: true,
		selectableRowsOnClick: true,
		onRowClick: (rowData, rowState) => {
			
					//What can I add here?
					console.log(rowData, rowState);
				},
	};


class Artists extends Component{
	constructor(){
		super();
        this.state = {
            columns: [],
            data: []
          };
}

componentDidMount=()=>{
	let { columns, data } = this.state;
	axios.get('https://jsonplaceholder.typicode.com/users')
	.then(response=> {
		// handle success
		console.log(response);

		this.setState({
			columns: [
				{
					title: 'ID',
					field: 'id'
				},
				{
					title: 'Name',
					field: 'name'
				},
				{
					title: 'Username',
					field: 'username'
				},
			],
			data: response.data

		})


	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	
}


	
	render(){
		return (		
			<div className="Artists">
				<h1 class="artists-header">Chocolate City Artists</h1>
				<MaterialTable
				options={options}
				icons={tableIcons}
				columns={this.state.columns}
				data={this.state.data}
				title=" "
				options={options}
				actions={[
    {
      icon: 'save',
      tooltip: 'Save User',
      onClick: (event, rowData) => {
				// Do save operation
				console.log(rowData)
				this.props.onSelect(rowData);
      }
    }
	]}

components={{
          Action: props => (
            <button
              onClick={(event) => props.action.onClick(event, props.data)}
              
              variant="contained"
              style={{textTransform: 'none', backgroundColor: 'transparent', color: 'blue', width: '100px', borderColor:'transparent'}}
              size="small"
            >
              View More
            </button>
          ),
        }}
	
	
				/>
			</div>	
		)
	}

}



export default connect(
	null,
	{
			addParams: addParams
	}
)(Artists);