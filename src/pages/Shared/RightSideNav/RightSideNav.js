import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTwitch,
  FaDiscord,
  FaStickyNote,
  FaScroll,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>
      <div className="mt-5">
        <p>Find Us On</p>
        <ListGroup>
          <ListGroup.Item className="mb-3">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaYoutube></FaYoutube> Youtube
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaTwitch></FaTwitch> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaWhatsapp></FaWhatsapp> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaDiscord></FaDiscord> Discord
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaScroll></FaScroll> privacy Policy
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaStickyNote></FaStickyNote> Terms & Condition
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
