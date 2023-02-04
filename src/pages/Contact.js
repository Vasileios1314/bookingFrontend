import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  faMapMarker,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";

export function Contact({ onRouteChange }) {
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText("+355 123 456 789");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  useEffect(() => {
    onRouteChange(false);
  }, []);

  const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    cursor: pointer;

    @media (max-width: 800px) {
      width: 100%;
      margin-bottom: 1rem;
    }
  `;

  const PhoneIcon = styled.span`
    cursor: pointer;
    font-size: 2rem;
    color: #bd2323;
    margin-bottom: 1rem;
    &:hover {
      color: #000;
    }
  `;

  const ContactContainer = styled.section`
    background-color: #fff;
    padding: 2rem;
    text-align: center;
  `;

  const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 2rem;
  `;

  const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 10rem;

    @media (max-width: 800px) {
      flex-direction: column;
      margin-top: 0;
    }
  `;

  const Icon = styled.span`
    font-size: 2rem;
    color: #bd2323;
    margin-bottom: 1rem;
  `;

  const Text = styled.p`
    font-size: 1.3rem;
    color: #333;
    margin: 0;
  `;

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <p>
        Our hotel is located in the heart of Albania's capital city, Tirana. We
        are open 24/7 and offer a warm and welcoming atmosphere for all of our
        guests.
      </p>
      <InfoContainer>
        <InfoBlock onClick={handleShow}>
          <PhoneIcon>
            <FontAwesomeIcon icon={faMapMarker} />
          </PhoneIcon>
          <Text>123 Main Street, Albania</Text>
        </InfoBlock>
        <InfoBlock>
          <PhoneIcon onClick={handleCopy}>
            <FontAwesomeIcon icon={faPhone} title="Copy to your clipboard!" />
          </PhoneIcon>
          <Text>+355 123 456 789</Text>
          {copied && <p>Phone number copied to clipboard!</p>}
        </InfoBlock>
        <InfoBlock>
          <Icon>
            <FontAwesomeIcon icon={faClock} />
          </Icon>
          <Text>
            Check In: 14:00 <br /> Check Out: 10:00
          </Text>
        </InfoBlock>
      </InfoContainer>
      <Text>Our hotel is open 24/7 and always ready to serve you.</Text>
      <Modal size="xl" fullscreen={fullscreen} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Location of the Hotel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title="GoogleMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.7990994176034!2d19.489515990109776!3d40.45881853339447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134533c22ce3deaf%3A0xe7dc304baa7841ee!2sAuto%20Service%20Spiropali!5e1!3m2!1sen!2snl!4v1675543227466!5m2!1sen!2snl"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </ContactContainer>
  );
}
