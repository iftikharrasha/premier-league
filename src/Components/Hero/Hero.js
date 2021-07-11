import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <section id="hero-section">
                <div className="hero d-flex align-items-center">
                    <Container className="c_custom">
                        <Row>
                            <Col>
                                <div className="hero-inner">
                                    <p className="lit-18 c-tag-3 ml-1">20th July 2021</p>
                                    <h1 className="bold-88 c-tag-3">FINAL TO BE<br />PLAYED AT<br />OLD TRAFFORD</h1>
                                    <button className="btn btn-tag-1 c-tag-3 ml-1 my-4 px-4 py-2">LEARN MORE</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="hero-footer"><span>OLD TRAFFORD</span></div>
            </section>
        </>
    );
};

export default Hero;