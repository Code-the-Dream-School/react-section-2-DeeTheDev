import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Webdesign from "../images/webdesign.jpg";

function Profile() {
    return (
        <Row className="my-4">
            <Col md={5} lg={4}>
                <Image src={Webdesign} alt="banner" fluid rounded />
            </Col>
            <Col md={7} lg={8}>
                <h3>Full Stack Web Developer</h3>
                <p>
                    My name is Denilson Velasquez and I’m a passionately driven,
                    self-taught full-stack web developer located in Durham, NC.
                    I have specialized in building modern and responsive
                    websites with languages like HTML, CSS and Javascript within
                    my six plus years of experience.
                </p>
            </Col>
        </Row>
    );
}

export default Profile;
