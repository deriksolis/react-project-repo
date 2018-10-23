import React from 'react';
import Carousel from './carousel';

const Home = () => {

    return (
      <div className="container">
        <Carousel />
        <div className="home-top">
          <h2>Quit dreaming, start living the dream</h2>
          <p>Here at dreamcation we believe in people being able to live their dreams. Whatever those dreams are. We provide a wide variety
            of options to the customer ensuring their satisfaction. Stop dreaming of your perfect vacation? <br/> Start planning today!
          </p>
        </div>
        <div className="home-bottom">
          <div className="home-bottom__cards">
            <h3>Travel to a beautiful beach today</h3>
            <img src='../../static/img/beach.svg' alt=""/>
            <button>View More!</button>
          </div>
          <div className="home-bottom__cards">
            <h3>Take your next hiking adventure today</h3>
            <img src='../../static/img/mount.svg' alt=""/>
            <button>View More!</button>
          </div>
          <div className="home-bottom__cards">
            <h3>Time to take out the fishing poles</h3>
            <img src='../../static/img/lake.svg' alt=""/>
            <button>View More!</button>
          </div>
        </div>
      </div>
    );
}

export default Home;
