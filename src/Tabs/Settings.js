import React, { useRef } from 'react';
import {
  Form,
  Button,
  InputGroup,
} from 'react-bootstrap';

export default function Settings(props) {
  const lastElem = useRef();

  const handleFocus = (e) => {
    e.preventDefault();
    console.log(lastElem.current);
    if (lastElem.current) {
      lastElem.current.focus();
    }
  }

  return (
    <Form>
      <Form.Group>
        <Button onClick={handleFocus}>Focus on last</Button>
      </Form.Group>
      <Form.Group>
        <Form.Label>Account Type</Form.Label>
        <Form.Control id="" as="select">
          <option value="0">Regular</option>
          <option value="1">Special</option>
          <option value="2">VIP</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="fdark_theme_flag"
          label="Dark Theme"
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="falert_on_sound_flag"
          label="Enable Sounds on Alert"
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="fsend_email_flag"
          label="Send updates via Email"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Backup</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="path">Path</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            id="fbackup_path"
            type="text"
            placeholder="C:/Backupfile.txt"
            aria-describedby="path"
            name="backup"
          />
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Button
          id="fprint_button"
          variant="primary">Print as PDF</Button>
      </Form.Group>
      {/* Kool stuff */}
      <Form.Group>
        <Form.Check
          type="switch"
          id="ftimer_flag"
          label="Timer"
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="fmax_fatality_time_flag"
          label="Max Fatality Time"
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="fplay_mini_game_flag"
          label="Play Mini Game"
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="fkombat_zone_flag"
          label="Kombat Zone"
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="fenable_pause_flag"
          label="Enable Pause"
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          ref={lastElem}
          type="switch"
          id="fview_game_credits_flag"
          label="View Game Credits"
        />
      </Form.Group>
    </Form>
  );
}