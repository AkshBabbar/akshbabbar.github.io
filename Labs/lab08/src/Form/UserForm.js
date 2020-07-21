import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import ReviewDetails from './ReviewDetails';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        review:'',
        emailError: false,
        phoneError: false,
        chk: '',
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step+1
        })
    }

    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step-1
        })
    }

    handleChange = input => e => {
        const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const phoneReg = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
        if(input == "email"){
            if(emailReg.test(e.target.value)){
                this.setState({
                    emailError: true,
                    chk: true && this.state.phoneError
                })
            }else{
                this.setState({
                    emailError: false,
                    chk: false && this.state.phoneError
                })
            }
        }
        else if(input == "phone"){
            if(phoneReg.test(e.target.value)){
                this.setState({
                    phoneError: true,
                    chk: this.state.emailError && true
                })
            }else{
                this.setState({
                    phoneError: false,
                    chk: this.state.emailError && false
                })
            }
        }
        this.setState({
            [input]: e.target.value,
        })
    }

    render() {
        const { step } = this.state;
        const { firstname, lastname, email, phone, review, emailError, phoneError, chk } = this.state;
        const values = { firstname, lastname, email, phone, review, emailError, phoneError, chk };
        switch(step) {
            case 1:
                return(
                    <FormUserDetails 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return(
                    <ReviewDetails 
                        nextStep = {this.nextStep}
                        previousStep = {this.previousStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3:
                return(
                    <Success/>
                )
        }
    }
}

export default UserForm
