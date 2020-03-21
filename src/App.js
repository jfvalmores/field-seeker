/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useRef } from 'react';
import {
  Tabs,
  Tab,
  Container,
} from 'react-bootstrap';
import {
  Main,
  Search,
  Profile,
  Contact,
  Settings,
} from './Tabs/';
import FieldList from './FieldList';

const pad = {
  marginTop: 10,
  marginBottom: 10
}

function App() {
  const [tab, setTab] = useState('search');
  const mContainer = useRef(null);

  const focusOnField = (node) => {
    const container = setTabRef(node.tab);
    const field = container.querySelector(`#${node.id}`);
    setTimeout(() => {
      field.focus();
    }, 200);
  }

  const setTabRef = (tab) => {
    setTab(tab);
    return mContainer.current
  }

  return (
    <Container
      fluid="md"
      style={pad}
      ref={mContainer}>
      <Tabs
        defaultActiveKey="main"
        activeKey={tab}
        onSelect={(tab) => setTab(tab)}>
        <Tab
          eventKey="main"
          title="Main"
          style={pad}>
          <Main />
        </Tab>
        <Tab
          eventKey="profile"
          title="Profile"
          style={pad}>
          <Profile />
        </Tab>
        <Tab
          eventKey="contact"
          title="Contact"
          style={pad}>
          <Contact />
        </Tab>
        <Tab
          eventKey="settings"
          title="Settings"
          style={pad}>
          <Settings />
        </Tab>
        <Tab
          eventKey="search"
          title="Search"
          style={pad}>
          <Search
            focusOnField={focusOnField}
            list={FieldList} />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
