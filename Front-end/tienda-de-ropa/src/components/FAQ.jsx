import React from "react";
import Accordion from "react-bootstrap/Accordion";

function FAQ() {
  return (
    <div className="FAQ">
      <h1 className="Title">FAQ (Frequently Asked Questions)</h1>

      <Accordion className="AccordionFAQ" >
          <Accordion.Item eventKey="0" data-aos="fade-left">
            <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Accordion.Body>
          </Accordion.Item>
        <Accordion.Item eventKey="1" data-aos="fade-right">
          <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
          <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" data-aos="fade-left">
          <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
          <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.           </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" data-aos="fade-right">
          <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
          <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.           </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" data-aos="fade-left">
          <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
          <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.           </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" data-aos="fade-right">
          <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
          <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.           </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6" data-aos="fade-left">
          <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
          <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.           </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;
