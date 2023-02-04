import React, { useEffect, useState } from "react";
import { googleMapsApiUrl } from "../config/constants";
import styled from "styled-components";
import {
  faMapMarker,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export function Contact({ onRouteChange }) {
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCopy = () => {
    navigator.clipboard.writeText("+355 123 456 789");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  // const MapModal = () => (
  //   <Modal show={showMapModal} onHide={() => setShowMapModal(false)}>
  //     <Modal.Header closeButton>
  //       <Modal.Title>Location of the Hotel</Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>
  //       <div style={{ height: "400px", width: "100%" }}>
  //         <GoogleMapReact
  //           bootstrapURLKeys={{
  //             key: "YOUR_GOOGLE_MAP_API_KEY",
  //           }}
  //           defaultCenter={{
  //             lat: 41.327961,
  //             lng: 19.819098,
  //           }}
  //           defaultZoom={15}
  //         >
  //           <Marker lat={41.327961} lng={19.819098} text="Hotel Location" />
  //         </GoogleMapReact>
  //       </div>
  //     </Modal.Body>
  //   </Modal>
  // );

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
    margin-bottom: 1.5rem;
  `;

  const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    @media (max-width: 800px) {
      flex-direction: column;
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Location of the Hotel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Map
            // google={props.google}
            zoom={15}
            initialCenter={{ lat: 41.3275, lng: 19.8187 }}
          >
            <Marker position={{ lat: 41.3275, lng: 19.8187 }} />
          </Map> */}
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
{
  /* <Icon>
            <FontAwesomeIcon icon={faClock} />
          </Icon>
           <Icon>
           <FontAwesomeIcon icon={faPhone} />
         </Icon>
          <Icon>
          <FontAwesomeIcon icon={faMapMarker} />
        </Icon> */
}
