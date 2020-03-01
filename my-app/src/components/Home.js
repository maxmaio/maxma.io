import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Nav} from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <Container>
        <Container className="header">
          <Image className="gravatar" src="https://www.gravatar.com/avatar/4934318e81ec19904134280eb795b7ad?s=600" alt="avatar" />
          <h4>Max Maio</h4>
        </Container>
          <Container fluid={true}>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/art1">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
          </Container>
        </Container>
        );
}
export default Home;