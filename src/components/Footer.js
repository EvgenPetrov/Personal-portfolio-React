import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/petrov2.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
    return (
        <footer className="footer ">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className=" footer-iconbx text-center  text-sm-end ">
                        <div className="social-icon  ">
                            <a href="https://www.linkedin.com/in/petrove/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="Icon" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100093864750913" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon2} alt="Icon" />
                            </a>
                            <a href="https://www.instagram.com/cedrum_/ " target="_blank" rel="noopener noreferrer">
                                <img src={navIcon3} alt="Icon" />
                            </a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
