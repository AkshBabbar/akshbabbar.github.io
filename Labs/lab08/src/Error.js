import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Error = () => {
    return(
        <div className="errorPage">
         <Navbar />
         <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="errormsg">
                    <i class="fas fa-exclamation-triangle"></i>   Error 404<br />The page you're looking for can't be found !</h1>
                    <h4 className="errormsg">
                        Looks like you got lost in our wonderful world of skins.<br />
                        Dont worry, this button will take you right back  <a href="/" className="btn btn-dark">Home</a>
                    </h4>
                </div>
            </div>
         </div>
         <Footer />
        </div>
    )
}

export default Error;