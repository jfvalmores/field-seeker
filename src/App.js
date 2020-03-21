/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
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
} from './Tabs/'

const pad = {
  marginTop: 10,
  marginBottom: 10
}

function App() {
  return (
    <Container fluid="md" style={pad}>
      <Tabs defaultActiveKey="main" id="uncontrolled-tab-example">
        <Tab eventKey="main" title="Main" style={pad}>
          <Main />
        </Tab>
        <Tab eventKey="profile" title="Profile" style={pad}>
          <Profile />
        </Tab>
        <Tab eventKey="contact" title="Contact" style={pad}>
          <Contact />
        </Tab>
        <Tab eventKey="settings" title="Settings" style={pad}>
          <Settings />
        </Tab>
        <Tab eventKey="search" title="Search" style={pad}>
          <Search />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
