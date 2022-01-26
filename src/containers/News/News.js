import React from 'react';
import "./News.css";
import Cards from "../../components/Cards";
import HttpService from "../../service/Service";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { CardGroup } from 'react-bootstrap';

export default class News extends React.Component{
    constructor(){
      super()
      this.state = {newsData:false};
    }
    http = new HttpService();
    componentDidMount(){
      this.http.getNewsData().then((result)=>{
        this.setState({newsData:result.data})
      })
    }
    render() {
     return  (<div>{this.state.newsData ?<CardGroup><Row>
       {this.state.newsData.articles.map((value,idx)=>{
         return <Cards key={idx} newsData={value}>
         </Cards>
       })}</Row>
      </CardGroup> : <div className="centered"><Spinner animation="border" /></div>}</div>)
    }
}