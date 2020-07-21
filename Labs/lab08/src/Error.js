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
                    <h3 className="errormsg">
                        To return to the home page, click this button <a href="/" className="btn btn-dark">Home</a>
                    </h3>
                </div>
            </div>
         </div>
         <Footer />
        </div>
    )
}

export default Error;