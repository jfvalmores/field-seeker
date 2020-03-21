import React from 'react';
import {
  InputGroup,
  FormControl,
} from 'react-bootstrap';

export default function Search(props) {
  /* eslint-disable jsx-a11y/accessible-emoji */
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