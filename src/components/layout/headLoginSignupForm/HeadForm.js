import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Line = styled.hr`
  margin: 10px 0;
  border: none;
  border-top: 1px solid gray;
  width: 100%;
`;

const MiddleDot = styled.span`
  padding: 0 10px;
`;

function HeadForm(props) {
    return (
        <Container style={{
            display: "flex", flexDirection: "column", gap: "20px"
        }}>
            <Row>
                <Col Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
                    <img src='./assets/images/layout/headloginSignupForm/EALogo-New.svg' alt='image1' />
                </Col>
            </Row >
            <Row>
                <Col xs={12} style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                    {props.children}
                </Col>
            </Row>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                <div style={{
                    width: "45px", height: "45px", display: "flex", justifyContent: "center", textAlign: "center", borderRadius: "10px",
                    cursor: "pointer", backgroundColor: "white"
                }}><img
                        width={25} src='./assets/images/layout/headloginSignupForm/google.svg' alt='Google' /></div>
                <div style={{
                    width: "45px", height: "45px", display: "flex", justifyContent: "center", textAlign: "center", borderRadius: "10px",
                    cursor: "pointer", backgroundColor: "#1877f2"
                }}><img
                        width={25} src='./assets/images/layout/headloginSignupForm/facebook.svg' alt='Facebook' /></div>
                <div style={{
                    width: "45px", height: "45px", display: "flex", justifyContent: "center", textAlign: "center", borderRadius: "10px",
                    cursor: "pointer", backgroundColor: "white"
                }}><img
                        width={25} src='./assets/images/layout/headloginSignupForm/apple.svg' alt='Apple' /></div>
                <div style={{
                    width: "45px", height: "45px", display: "flex", justifyContent: "center", textAlign: "center", borderRadius: "10px",
                    cursor: "pointer", backgroundColor: "#000000"
                }}><img
                        width={25} src='./assets/images/layout/headloginSignupForm/steam.svg' alt='Steam' /></div>
                <div style={{
                    width: "45px", height: "45px", display: "flex", justifyContent: "center", textAlign: "center", borderRadius: "10px",
                    cursor: "pointer", backgroundColor: "#107c10"
                }}><img
                        width={25} src='./assets/images/layout/headloginSignupForm/xbox.svg' alt='Xbox' /></div>
                <div style={{
                    width: "45px", height: "45px", display: "flex", justifyContent: "center", textAlign: "center", borderRadius: "10px",
                    cursor: "pointer", backgroundColor: "#0049a0"
                }}><img
                        width={25} src='./assets/images/layout/headloginSignupForm/psn.svg' alt='Play Station' /></div>
            </div>
            <Row>
                <Col xs={12} style={{ display: "flex" }}>
                    <Line />
                    <MiddleDot style={{ color: "white" }}>o</MiddleDot>
                    <Line />
                </Col>
            </Row>
        </ Container >
    );
}

export default HeadForm;
