import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/icons8-react-160.svg";
import javascript from "../assets/img/icons8-js-144.svg";
import html from "../assets/img/icons8-html.svg";
import css from "../assets/img/icons8-css.svg";
import sass from "../assets/img/icons8-sass.svg";
import github from "../assets/img/icons8-github.svg";
import node from "../assets/img/icons8-node-js.svg";

import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                I constantly expand my knowledge and follow the latest trends in web development,<br></br> which allows me to find
                                effective solutions for any problem.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={react} alt="" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="" />
                                    <h5>Java Script</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={sass} alt="" />
                                    <h5>SASS</h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt="" />
                                    <h5>Git & Github</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="" />
                                    <h5>Node.js</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
};

export default Skills;
