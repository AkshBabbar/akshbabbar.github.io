import React, { Component } from "react";
import UserForm from "./Form/UserForm";
import Cards from "./Cards/Cards";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Home extends Component {
  // render(){
  //   return(
  //     <div>
  //       <UserForm />
  //     </div>
  //   )
  // }
  render() {
    return (
      <div>
        <div className="container-fluid m-0 p-0">
            <Navbar />
        </div>
        <div className="container-fluid m-0 p-0" id="top">
          <div className="img-section">
            <img id="cover-img" src="images/cover-img.jpg" />
            <div className="centered">
              <h1>WELCOME TO SKINPROS !</h1>
              <p className="font-text">SEE WHAT YOUR MONEY GETS YOU</p>
            </div>
          </div>
        </div>

        <div className="container-fluid section m-0 p-0" id="card-section">
          <div className="section-header skins-header">
            <h1 className="text-center">SKINS</h1>
            <p className="text-center text-secondary font-text">
              BROWSE THROUGH OUR WIDE VARIETY OF SKINS
            </p>
          </div>
          <div className="container">
              <Cards />
          </div>
        </div>

        <div className="container-fluid section m-0 p-0" id="howto-section">
          <div className="section-header skins-header">
            <h1 className="text-center">HOW-TO</h1>
            <p className="text-center text-secondary font-text">
              LEARN HOW TO APPLY YOUR SKIN
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <iframe
                  id="youtube"
                  src="https://www.youtube.com/embed/IfBnYxpLVG8"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid section m-0 p-0" id="review-section">
          <div className="section-header skins-header">
            <h1 className="text-center">REVIEW</h1>
            <p className="text-center text-secondary font-text">
              PLEASE PROVIDE A REVIEW FOR OUR WEBSITE
            </p>
          </div>
          <UserForm />
        </div>

        <Footer />
    </div>
    );
  }
}

export default Home;
