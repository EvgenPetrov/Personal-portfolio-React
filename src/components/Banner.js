import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>
                            {`Hi! I'm Evgeny`} <br />
                            <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer"]'>
                                <span className="wrap">{text}</span>
                            </span>
                        </h1>
                        <p>
                            Hello! My name is Evgeniy Petrov, I am a web developer passionate about creating unique and functional web applications.
                            In my work, I use advanced technologies and best practices to create modern and effective solutions. My approach includes
                            attention to detail, analytical thinking and creativity. I believe that a good website should be visually appealing, fast
                            and secure. Ready to help you turn your ideas into reality!
                        </p>
                        <button onClick={() => console.log("connect")}>
                            Let’s Connect
                            <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
