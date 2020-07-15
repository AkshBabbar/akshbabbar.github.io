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
        this.setState({
            [input]: e.target.value,
        })
    }

    render() {
        const { step } = this.state;
        const { firstname, lastname, email, phone, review } = this.state;
        const values = { firstname, lastname, email, phone, review };
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
