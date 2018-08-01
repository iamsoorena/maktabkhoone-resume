import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitlesSection.css";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

class TitlesSection extends Component {
  constructor() {
    super();
    this.state = {
      color: "white"
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "white"
    });
  }

  render() {
    return (
      <div>
        <Fullpage className="first">
          <h1
            className="title"
            style={{
              color: this.state.color
            }}
            onMouseOver={this.changeColor}
            onMouseLeave={() => {
              this.changeColor();
            }}
          >
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          delay={0}
        >
          <DownIcon
            icon={data.icons.down}
            onClick={() => console.log("im working")}
          />
        </Link>
        <Element name="about" className="element" />
      </div>
    );
  }
}

export default TitlesSection;
