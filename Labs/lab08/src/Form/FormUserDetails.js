import React, { Component } from 'react';
import './form.css';

export class FormUserDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className ="container form p-0">
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid">
                            <div className="col-12 text-center">
                                <h4 className="form-header">ENTER YOUR DETAILS</h4>
                                <p className="font-text text-secondary">STEP 1 OF 2</p>
                            </div>
                            <div className="row">
                                <div className="col-6 text-center form-input">
                                    <input 
                                        type="text"
                                        onChange={handleChange('firstname')}
                                        placeholder="FIRST NAME"
                                        className="input-field"
                                    />
                                </div> 
                                <div className="col-6 text-center form-input">
                                    <input 
                                        type="text"
                                        onChange={handleChange('lastname')}
                                        placeholder="LAST NAME"
                                        className="input-field"
                                    />
                                </div> 
                                <div className="col-6 text-center form-input">
                                    <input 
                                        type="text"
                                        onChange={handleChange('email')}
                                        placeholder="EMAIL ID"
                                        className="input-field"
                                    />
                                </div> 
                                <div className="col-6 text-center form-input">
                                    <input 
                                        type="text"
                                        onChange={handleChange('phone')}
                                        placeholder="PHONE NO"
                                        className="input-field"
                                    />
                                </div>
                                <div className="col-12 text-center form-review">
                                    <input 
                                        type="text"
                                        onChange={handleChange('review')}
                                        placeholder="TELL US YOUR THOUGHTS ABOUT OUR WEBSITE"
                                        className="input-field"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <div className="btn reviewBtn font-text" onClick={this.continue}>
                                        Review Submission
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

export default FormUserDetails
