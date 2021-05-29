import React from "react";
import "../ComponentCSS/HeroImg.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

//svgs

import chef_svg from "../Assets/Svgs/undraw_Chef_cu0r.svg";
import dish_svg from "../Assets/Svgs/undraw_cooking_lyxy.svg";
const HeroImg = () => {
  //Initializeing AOS

  return (
    <>
      <div className="container">
        <div className="Chef_IMG">
          <img src={chef_svg} alt="" />
        </div>
        <div className="Bottom_IMG">
          {" "}
          <img src={dish_svg} alt="" />
        </div>
        <div className="links">
          <ul>
            <li>
              <InstagramIcon className="linkIcon" />
            </li>
            <li>
              <FacebookIcon className="linkIcon" />
            </li>
            <li>
              <PinterestIcon className="linkIcon" />
            </li>
            <li>
              <TwitterIcon className="linkIcon" />
            </li>
            <li>
              <RedditIcon className="linkIcon" />
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="textArea">
            <h1 data-aos="zoom-out" data-aos-duration="2000">
              Make Food
            </h1>
            <p
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Make you own dish
            </p>
          </div>

          <button className="heroButton">
            <ArrowDownwardIcon className="arrow" />
          </button>
        </div>
        <div className="lines">
          <ul>
            <li>Bread</li>
            <li>Smoothes</li>
            <li>For Vegans</li>
            <li>Suger-Free</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default HeroImg;
