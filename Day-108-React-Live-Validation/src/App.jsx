
import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  // Validate one field at a time
  function validateField(name, value) {
    if (name === 'name') {
      if (!value.trim()) {
        return 'Name cannot be empty.';
      }
    }

    if (name === 'email') {
      if (!value.trim()) {
        return 'Email is required.';
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(value.trim())) {
        return 'Please enter a valid email address.';
      }
    }

    if (name === 'password') {
      if (value.length < 8) {
        return 'Password must be at least 8 characters.';
      }
    }

    return '';
  }

  // Update input state and validate as the user types
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(previousData => ({
      ...previousData,
      [name]: value
    }));

    setIsSubmitted(false);

    // Show live validation after the user attempts submission
    if (hasAttemptedSubmit) {
      const errorMessage = validateField(name, value);

      setErrors(previousErrors => ({
        ...previousErrors,
        [name]: errorMessage
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHasAttemptedSubmit(true);

    const newErrors = {};

    // Validate every field
    Object.keys(formData).forEach(fieldName => {
      const errorMessage = validateField(
        fieldName,
        formData[fieldName]
      );

      if (errorMessage) {
        newErrors[fieldName] = errorMessage;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  }

  return (
    <main className="registration">
      <h1>Registration Form</h1>
      <p className="subtitle">
        Errors update as you correct your details.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && (
            <p className="error-message">{errors.name}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && (
            <p className="error-message">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="At least 8 characters"
            aria-invalid={Boolean(errors.password)}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>

        <button type="submit">Register</button>
      </form>

      {isSubmitted && (
        <section className="success-message">
          <h2>Validation Successful!</h2>
          <p>Your form passed all validation checks.</p>
          <p><strong>Name:</strong> {formData.name.trim()}</p>
          <p><strong>Email:</strong> {formData.email.trim()}</p>
        </section>
      )}
    </main>
  );
}

export default App;
