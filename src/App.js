import React, { useState } from "react";
import './index.css';

function App() {

  const [values,setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid,setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
  	event.persist();
  	setValues((values) => ({
  		...values,
  		firstName: event.target.value,
  	}));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleSubmit =(event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email) {
    setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className='form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        {submitted && valid ? <div class='success-message'>Success! Thank you for registering</div> : null}
        <input
          id='first-name'
          class='form-field'
          type='text'
          placeholder='First Name'
          name='firstName'
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName ? <span id='first-name-error'>Please enter a first name</span> : null}
        <input
          id='last-name'
          class='form-field'
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          id='email'
          class='form-field'
          type='text'
          placeholder='Email'
          name='email'
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
