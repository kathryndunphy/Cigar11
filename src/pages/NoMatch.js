import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Cigar Not Rolled - This Computer will Self-Destruct in 30 Seconds, right after a short 45 minute maduro experience</h1>
            <h1>
              {/* <span role="img" aria-label="Inspector Gadget with message that will self-destruct">
                <a href="https://www.toplessrobot.com/wp-content/uploads/2015/04/assignment.jpg"></a>
              </span>
              <span role="img" aria-label="Tom and Jerry smoking cigars">
                <a href="https://www.havanahouse.co.uk/wp-content/uploads/2018/01/tomand-jerry.png"></a>
              </span> */}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
