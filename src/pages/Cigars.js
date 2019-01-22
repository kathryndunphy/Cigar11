import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


class Cigars extends Component {
  state = {
    cigars: [],
    brand: "",
    origin: "",
    experience: ""
  };

  componentDidMount() {
    this.loadCigars();
  }

  loadCigars = () => {
    API.getCigars()
      .then(res =>
        this.setState({ cigars: res.data, brand: "", origin: "", experience: "" })
      )
      .catch(err => console.log(err));
  };

  deleteCigar = id => {
    API.deleteCigar(id)
      .then(res => this.loadCigars())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.brand && this.state.origin) {
      API.saveCigar({
        brand: this.state.brand,
        origin: this.state.origin,
        experience: this.state.experience
      })
        .then(res => this.loadCigars())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Cigars Should I Try?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.brand}
                onChange={this.handleInputChange}
                name="brand"
                placeholder="Brand (required)"
              />
              <Input
                value={this.state.origin}
                onChange={this.handleInputChange}
                name="origin"
                placeholder="Origin (required)"
              />
              <TextArea
                value={this.state.experience}
                onChange={this.handleInputChange}
                name="experience"
                placeholder="Experience (Optional)"
              />
              <FormBtn
                disabled={!(this.state.origin && this.state.brand)}
                onClick={this.handleFormSubmit}
              >
                Submit Cigar
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Cigars In My Humidor</h1>
            </Jumbotron>
            {this.state.cigars.length ? (
              <List>
                {this.state.cigars.map(cigar => (
                  <ListItem key={cigar._id}>
                    <Link to={"/cigars/" + cigar._id}>
                      <strong>
                        {cigar.brand} by {cigar.origin}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCigar(cigar._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display bc a thing happened.  Let's try again... press any button you feel confident isn't going to make the world explode.</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cigars;
