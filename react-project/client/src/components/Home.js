import React, {Component} from 'react';
import Carousel from './carousel';


// let i = 0;
// let images = [];

// images[0]= "url('../../static/img/beach.jpg')";
// images[1]= "url('../../static/img/mountains.jpg')";
// images[2]= "url('../../static/img/lake.jpg')";


class Home extends Component {
  // constructor(props){
  //   super(props);
  // }

  // changeImg = () => {
  
  //   let hero = document.querySelector(".hero");
  //   if (hero) {
  //     hero.style.backgroundImage = images[i];
  //     if(i < images.length - 1) {
  //       i++;
  //     } else {
  //       i = 0;
  //     }
  
  //     setTimeout(this.changeImg, 3000);
  //   } 
  // };
  
  // componentDidMount(){
  //   this.changeImg();
  // }

  render(){
    return (
      <div className="container">
        {/* <div className="hero">
          <div className="hero__innerbox">
            <h1>Location: Paradise</h1>
            <p>You define what paradise is to you. We just give you a few options. Click below to find out more!</p>
            <div className="button-container">
              <button>See more!</button>
            </div>
          </div>
        </div>  */}
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
}

export default Home;
