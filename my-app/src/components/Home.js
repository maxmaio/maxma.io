import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Nav} from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <Container>
        <Container className="header">
          <Image className="gravatar" src="https://www.gravatar.com/avatar/4934318e81ec19904134280eb795b7ad?s=600" alt="avatar" />
          <h5>max maio</h5>
          <p>math art and coding...</p>
        </Container>
          <Container fluid={true}>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/art1">ex1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/art2">ex2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/art3">ex3</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>coming soon</Nav.Link>
        </Nav.Item>
      </Nav>
          </Container>
        </Container>
        );
}
export default Home;