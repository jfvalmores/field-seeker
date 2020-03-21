import React from 'react';
import {
  Col,
  Form,
  InputGroup,
} from 'react-bootstrap';

export default function Profile(props) {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} md="4">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            id="ffirst_name"
            type="text"
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            id="flast_name"
            type="text"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputAt">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              id="fusername"
              type="text"
              placeholder="Username"
              aria-describedby="inputAt"
              required
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>System</Form.Label>
          <Form.Control
            id="fsystem"
            type="text"
            placeholder="System" />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Star</Form.Label>
          <Form.Control
            id="fstar"
            type="text"
            placeholder="Star" />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Planet</Form.Label>
          <Form.Control
            id="fplanet"
            type="text"
            placeholder="Planet" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>City</Form.Label>
          <Form.Control
            id="fcity"
            type="text"
            placeholder="City" />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>State</Form.Label>
          <Form.Control
            id="fstate"
            type="text"
            placeholder="State" />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            id="fzip"
            type="text"
            placeholder="Zip" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>Race</Form.Label>
          <Form.Control
            id="frace"
            type="text"
            placeholder="Race" />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Language</Form.Label>
          <Form.Control
            id="flanguage"
            type="text"
            placeholder="Language" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            id="fbio"
            as="textarea"
            rows="3"
            placeholder="Tell us more about yourself" />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}