import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        fade: true
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
                <div>
                    <img className="carousel__img" src='../../static/img/beach.jpg' alt=""/>
                </div>
                <div>
                    <img className="carousel__img" src='../../static/img/mountains.jpg' alt=""/>
                </div>
                <div>
                    <img className="carousel__img" src='../../static/img/lake.jpg' alt=""/>
                </div>
        </Slider>
        <div className="carousel__innerbox">
            <h1>Location: Paradise</h1>
            <p>You define what paradise is to you. We just give you a few options. Click below to find out more!</p>
            <div className="button-container">
                <button>See more!</button>
            </div>
        </div>
      </div>
    );
  }
}