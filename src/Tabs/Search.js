import React from 'react';
import {
  Table,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

export default function Search(props) {
  const [keyword, setKeyword] = React.useState('');
  const [mList, setList] = React.useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
    searchList(value);
  }

  const searchList = (key) => {
    let arrResult = [];

    if (key) {
      arrResult = props.list.filter(
        field => field.id.includes(key) || field.label.includes(key)
      );
    }

    setList(arrResult);
  }

  const handleClick = (field) => {
    props.focusOnField(field)
  }

  /* eslint-disable jsx-a11y/anchor-is-valid */
  /* eslint-disable jsx-a11y/accessible-emoji */
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="search-icon">🔍</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          id="fkeyword"
          value={keyword}
          onFocus={e => e.target.focus()}
          autoFocus
          onChange={handleChange}
          placeholder="Field"
          aria-label="Field"
          aria-describedby="search-icon"
        />
      </InputGroup>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Field</th>
          </tr>
        </thead>
        <tbody>
          {mList.map((field, index) => (
            <tr key={index}>
              <td onClick={() => handleClick(field)}>
                <a href="#">
                  {field.label}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}