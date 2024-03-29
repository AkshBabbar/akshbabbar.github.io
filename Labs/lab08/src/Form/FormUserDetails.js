import React, { Component } from 'react';
import './form.css';

export class FormUserDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { 
                values :{firstname, lastname, email, phone, review, emailError, phoneError, chk},
                handleChange } = this.props;
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
                                        value = { firstname }
                                    />
                                </div> 
                                <div className="col-6 text-center form-input">
                                    <input 
                                        type="text"
                                        onChange={handleChange('lastname')}
                                        placeholder="LAST NAME"
                                        className="input-field"
                                        value = { lastname }
                                    />
                                </div> 
                                <div className="col-6 text-center form-input">
                                    <input 
                                        type="text"
                                        onChange={handleChange('email')}
                                        placeholder="EMAIL ID"
                                        className="input-field"
                                        value = { email }
                                    />
                                    {emailError ? <span className="validation valid"><i class="fas fa-check-circle"></i>The email you entered is valid</span>: <span className="validation invalid">Please enter a valid email</span>}
                                </div> 
                                <div className="col-6 text-center form-input">
                                    <input 
                                        type="text"
                                        onChange={handleChange('phone')}
                                        placeholder="PHONE NO"
                                        className="input-field"
                                        value = { phone }
                                    />
                                    {phoneError ? <span className="validation valid"><i class="fas fa-check-circle"></i>The phone number you entered is valid</span>: <span className="validation invalid">Please enter a valid phone number</span>}
                                </div>
                                <div className="col-12 text-center form-review">
                                    <input 
                                        type="text"
                                        onChange={handleChange('review')}
                                        placeholder="TELL US YOUR THOUGHTS ABOUT OUR WEBSITE"
                                        className="input-field"
                                        value = { review }
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <div className="btn reviewBtn font-text" onClick={chk ? this.continue : null}>
                                        Review Submission <i class="fas fa-chevron-right"></i>
                                    </div>
                                    {chk ? null : <p className="validation">*Please fill all details correctly to proceed</p>}
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
