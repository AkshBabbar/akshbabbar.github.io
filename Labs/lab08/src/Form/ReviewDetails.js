import React, { Component} from 'react';
import './form.css';

export class ReviewDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const { 
            values :{firstname, lastname, email, phone, review}} = this.props;
        return (
            <div className ="container form p-0">
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid">
                            <div className="col-12 text-center">
                                <h4 className="form-header">CONFIRM SUBMISSION</h4>
                                <p className="font-text text-secondary">STEP 2 of 2</p>
                            </div>
                            <div className="row">
                                <div className="col-6 text-center">
                                    <p className="font-text review-font">
                                        Name - {firstname} {lastname}
                                    </p>
                                </div> 
                                <div className="col-6 text-center form-input">
                                    <p className="font-text review-font">
                                        Email - {email}
                                    </p>
                                </div> 
                                <div className="col-6 text-center form-input">
                                    <p className="font-text review-font">
                                        Phone Number - {phone}
                                    </p>
                                </div> 
                                <div className="col-6 text-center form-input">
                                    <p className="font-text review-font">
                                        Review - {review}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 text-center">
                                    <div className="btn reviewBtn font-text" onClick={this.back}>
                                        Back
                                    </div>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="btn reviewBtn font-text submit-form" onClick={this.continue}>
                                        Submit Form
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default ReviewDetails
