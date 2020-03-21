import React from 'react';
import {
  Col,
  Form,
} from 'react-bootstrap';

export default function Contact(props) {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} md="8">
          <Form.Label>Contact Person 1</Form.Label>
          <Form.Control
            id="fcontact_person_name1"
            type="text"
            placeholder="Name" />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Email/Website</Form.Label>
          <Form.Control
            id="fcontact_person_email1"
            type="text"
            placeholder="Email/Website" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="8">
          <Form.Label>Contact Person 2</Form.Label>
          <Form.Control
            id="fcontact_person_name2"
            type="text"
            placeholder="Name" />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Email/Website</Form.Label>
          <Form.Control
            id="fcontact_person_email2"
            type="text"
            placeholder="Email/Website" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="8">
          <Form.Label>Contact Person 3</Form.Label>
          <Form.Control
            id="fcontact_person_name3"
            type="text"
            placeholder="Name" />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Email/Website</Form.Label>
          <Form.Control
            id="fcontact_person_email3"
            type="text"
            placeholder="Email/Website" />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}