import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    cigars: {}
  };

  //****************the following note makes no sense to me ...just sayin -KD*/
  // When this component mounts, grab the cigar with the _id of this.props.match.params.id
  // e.g. localhost:3000/cigars/599dcb67f0f16317844583fc
  /*******************/

//this component display a cigar's Experience details
//using an AJAX request Experience details will populate if cigar is in the Brasas Tejas Humidor 
//Otherwise, a rejection experience down memory lane 
//AKA we ain't got that-there cigar in this-here humidor

  componentDidMount() {
    API.getCigar(this.props.match.params.id)
      .then(res => this.setState({ cigar: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.cigar.brand} by {this.state.cigar.origin}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Experience</h1>
              <p>
                {this.state.cigar.experience}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Continue Experiencing by Origin</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
