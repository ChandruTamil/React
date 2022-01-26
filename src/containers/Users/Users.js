import React from 'react';
import Table from "react-bootstrap/Table";
import Image from 'react-bootstrap/Image';
import "./Users.css";
import HttpService from '../../service/Service'

export default class Users extends React.Component{
    constructor(){
      super()
      this.state = {users:null}
    }
    componentDidMount(){
      const http = new HttpService();
      http.getUsersData().then((result)=>{
        this.setState({users:result.data});
      });
    }
    render(){
    return(
      <Table responsive>
      <thead>
        <tr>
          <th>User Image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Id</th>
        </tr>
      </thead>
      {this.state.users ? <tbody>
         {this.state.users.data.map((value,idx)=>{
        return   <tr key={idx}>
          <td><Image height="50px" src={value.avatar} roundedCircle="true"></Image></td>
          <td>{value.first_name}</td>
          <td>{value.last_name}</td>
          <td>{value.email}</td>
        </tr>
        
        })}
      </tbody>:<tbody><tr><td>Loading...</td></tr></tbody>}
    </Table>
    )
      }

}