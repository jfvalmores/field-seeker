/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  Tabs,
  Tab,
  Form,
  Button,
  Container,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

const pad = {
  marginTop: 10,
  marginBottom: 10
}

function App() {
  return (
    <Container fluid="md" style={pad}>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="main" title="Main" style={pad}>
          <TabForm />
        </Tab>
        <Tab eventKey="profile" title="Profile" style={pad}>
          <TabForm />
        </Tab>
        <Tab eventKey="contact" title="Contact" style={pad}>
          <TabForm />
        </Tab>
        <Tab eventKey="settings" title="Settings" style={pad}>
          <TabForm />
        </Tab>
        <Tab eventKey="search" title="Search" style={pad}>
          <SearchTab />
        </Tab>
      </Tabs>
    </Container>
  );
}

function TabForm(props) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function SearchTab(props) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="search-icon">🔍</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Field"
          aria-label="Field"
          aria-describedby="search-icon"
        />
      </InputGroup>
    </>
  )
}

export default App;
