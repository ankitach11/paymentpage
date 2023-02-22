import React, { Component } from 'react';
import VendorDetails from './VendorDetails';
import PersonalDetails from './PersonnalDetails';
import Terms from './Terms';
import'./App.css';

class Form extends Component {
  state = {
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    amount:'',
    isErrorFirstName: true,
    isErrorLastName: true,
    isErrorEmail:true,
    isErrorPhone: true,
    isErrorAmount:true,
    errorMessageFirstName: '',
    errorMessageLastName: '',
    errorMessageEmail:'',
    errorMessagePhone:'',
    errorMessageAmount:'',
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    const value = e.target.value;
    this.setState({
      [input]: e.target.value
    })

    if (input === 'firstname') {
      if (this.state.firstname.length >= 1) {
        this.setState({
          isErrorFirstName: false
        })
      }
    }

    else if (input === 'lastname') {
      if (this.state.lastname.length >= 1) {
        this.setState({
          isErrorLastName: false
        })
      }
    }

    else if (input === 'email') {
      if (this.state.email.length >= 1) {
        this.setState({
          isErrorEmail: false
        })
      }
    }else if (input === 'phone') {
      const phoneRegex = /^\d{10}$/; 
      if (phoneRegex.test(this.state.phone)) {
        this.setState({
          isErrorPhone: false
        })
      }
    }
    else if (input === 'amount') {
      if (Number(value) > 0) {
        this.setState({ isErrorAmount: false });
      } else {
        this.setState({ isErrorAmount: true });
      }
    }
  }



  validateFirstName = () => {
    if (this.state.firstname.length < 2) {
      this.setState({
        isErrorFirstName: true,
        errorMessageFirstName: 'Type your first name (at least 2 characters)'
      });
      return false;
    }
    return true;
  }

  validateLastName = () => {
    if (this.state.lastname.length < 2) {
      this.setState({
        isErrorLastName: true,
        errorMessageLastName: 'Type your last name (at least 2 characters)'
      });
      return false;
    }
    return true;
  } 

  validateEmail = () => {
    const email = this.state.email.trim();
  
    if (!email) {
      this.setState({
        isErrorEmail: true,
        errorMessageEmail: 'Email is required'
      });
      return false;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.setState({
        isErrorEmail: true,
        errorMessageEmail: 'Invalid email address'
      });
      return false;
    }
  
    return true;
  }
  validatePhone = () => {
    const phone = this.state.phone.trim();
  
    if (!phone) {
      this.setState({
        isErrorPhone: true,
        errorMessagePhone: 'Phone number is required'
      });
      return false;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      this.setState({
        isErrorPhone: true,
        errorMessagePhone: 'Phone number must be a 10-digit number'
      });
      return false;
    }
  
    return true;
  }

  validateAmount = () => {
    const amount = this.state.amount.trim();
  
    if (!amount) {
      this.setState({
        isErrorAmount: true,
        errorMessageAmount: 'Amount is required'
      });
      return false;
    }
  
    if (Number(amount) <= 0) {
      this.setState({
        isErrorAmount: true,
        errorMessageAmount: 'Amount must be greater than 0'
      });
      return false;
    }
  
    return true;
  }
  
  submitData = e => {
    e.preventDefault();
    alert('Data sent');
  }

  render() {
    const {
      step,
      firstname,
      lastname,
      email,
      phone,
      amount,
      isErrorFirstName,
      isErrorLastName,
      isErrorEmail,
      isErrorPhone,
      isErrorAmount,
      errorMessageFirstName,
      errorMessageLastName,
      errorMessageEmail,
      errorMessagePhone,
      errorMessageAmount
    } = this.state;

   
    
    switch(step) {
      case 1: 
        return (
          <VendorDetails 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
        
          />
        )
      case 2:
        return (
          <PersonalDetails 
          nextStep={this.nextStep}
          handleChange={this.handleChange}
      
          firstname={firstname}
          lastname={lastname}
          email={email}
          phone={phone}
          amount={amount}
          validateFirstName={this.validateFirstName}
          validateLastName={this.validateLastName}
          validateEmail={this.validateEmail}
          validatePhone={this.validatePhone}
          validateAmount={this.validateAmount}
          isErrorFirstName={isErrorFirstName}
          isErrorLastName={isErrorLastName}
          isErrorEmail={isErrorEmail}
          isErrorPhone={isErrorPhone}
          isErrorAmount={isErrorAmount}
          errorMessageFirstName={errorMessageFirstName}
          errorMessageLastName={errorMessageLastName}
          errorMessageEmail={errorMessageEmail}
          errorMessagePhone={errorMessagePhone}
          errorMessageAmount={errorMessageAmount}
          />
        )
      case 3:
        return (
          <Terms 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            firstname={firstname}
            lastname={lastname}
            email={email}
            phone={phone}
            amount={amount}
            submitData={this.submitData}
          />
        )
        
      default: return null
    }
    
  }
}

export default Form;
