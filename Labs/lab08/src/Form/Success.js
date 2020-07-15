import React, { Component } from 'react';

export class Success extends Component{
    render(){
        return(
            <div className="container form">
                <div className="row">
                    <div className="col-12">
                        <div className="submitted text-center">
                            <p className="font-text">Your form has been submitted. Thank You</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Success;