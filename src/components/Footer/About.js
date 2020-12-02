import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';

function About (props) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
   
    return (
      <div className={props.className}>
        <Button variant="warning" size="sm" onClick={toggle}>
          <b>About Project</b>
        </Button>
        <Modal show={modal} onHide={toggle} className={props.className}>
          <Modal.Header toggle={toggle}>
            React bull study project
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>
                <b>Author of the project:</b> Bohdan Yaroshchuk
              </li>
              <li>
                <b>Email:</b> <a href="mailto:b2092ua@gmail.com" target="_blank" rel="noopener noreferrer">b2092ua@gmail.com</a>
              </li>
              <li>
                <b>Phone:</b> +380966772722
              </li>
              <li>
                <b>Telegram:</b> +380966772722
              </li>
              <li>
                <b>Viber:</b> +380966772722
              </li>
              <li>
                <b>Github:</b> 
                <a href="https://github.com/yaroschukb" target="_blank" rel="noopener noreferrer">github repo link</a>
              </li>
              <li>
                <b>Facebook:</b>  
                <a href="https://www.facebook.com/profile.php?id=100002146611124" target="_blank" rel="noopener noreferrer">facebook link</a>
              </li>
            </ul>
            <h1>Briefly about the project </h1> 
            <p>
              The main purpose of this project is to practice the skills of working with the React library and Redux.<br/>
              <b>Additional libraries:</b></p>
              <ol className={props.listLib}>
                <li>
                  <b>React router</b> -  standard routing library for React
                </li>
                <li>
                  <b>Redux Thunk</b> - middleware allows you to write action creators that return a function instead of an action
                </li>
                <li>
                  <b>Redux Form</b> - for work with forms
                </li>
                <li>
                  <b>axios</b> - Promise based HTTP client for the browser and node.js
                </li>
              </ol>
              <p>
                More information on <a href="https://github.com/yaroschukb/StudyProjectReact" target="_blank" rel="noopener noreferrer">github repository</a>
              </p>
          </Modal.Body>
          <Modal.Footer>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    </div>
    )
};

export default About;