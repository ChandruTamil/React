import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { GetDate } from "../lib/getdate";

export default class Cards extends React.Component{
  convertDate(date){
    return GetDate(date)
  }
  render(){
    return (
  <Col  xs={4}>
  <Card style={{marginTop:"10px"}}>
  <Card.Img variant="top" height="150px" src={this.props.newsData.urlToImage} />
  <Card.Body>
    <Card.Title className="custom-title" bsPrefix="custom-title">{this.props.newsData.title}</Card.Title>
    <Card.Text className="custom-class" bsPrefix="custom-class">
      {this.props.newsData.description}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
      <small className="text-muted">{this.convertDate(this.props.newsData.publishedAt)}</small>
    </Card.Footer>
</Card>
</Col>)
  };

}