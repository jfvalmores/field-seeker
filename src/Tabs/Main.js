import React from 'react';
import {
  Form,
} from 'react-bootstrap';

export default function Main(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Project Name</Form.Label>
        <Form.Control
          required
          id="fproject_name"
          type="text"
          placeholder=" "
          defaultValue="Episode I – A New Project" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          id="fdescription"
          as="textarea"
          rows="3"
          placeholder=" "
          defaultValue="A long time ago in a repository far, far away...." />
      </Form.Group>
      <Form.Group>
        <Form.Label>Tags</Form.Label>
        <Form.Control
          id="ftags"
          type="text"
          placeholder=" "
          defaultValue="Sci-fi,Fantasy,Out of this world" />
        <Form.Text className="helper-text">
          Comma-separated
        </Form.Text>
      </Form.Group>
    </Form>
  );
}