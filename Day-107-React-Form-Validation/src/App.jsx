
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

  // Update form data whenever an input changes
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(previousData => ({
      ...previousData,
      [name]: value
    }));

    // Hide the previous success message when editing
    setIsSubmitted(false);
  }

  // Validate all form fields
  function validateForm() {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name cannot be empty.';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Validate password
    if (formData.password.length < 8) {
      newErrors.password =
        'Password must be at least 8 characters.';
    }

    return newErrors;
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);
    setIsSubmitted(false);

    // Submit successfully only if there are no errors
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  }

  return (
    <main className="registration">
      <h1>Registration Form</h1>
      <p className="subtitle">
        Enter your details to validate the form.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />

          {errors.name && (
            <p id="name-error" className="error-message">
              {errors.name}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />

          {errors.email && (
            <p id="email-error" className="error-message">
              {errors.email}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            value={formData.password}
            onChange={handleChange}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={
              errors.password ? 'password-error' : undefined
            }
          />

          {errors.password && (
            <p id="password-error" className="error-message">
              {errors.password}
            </p>
          )}
        </div>

        <button type="submit">Validate Registration</button>
      </form>

      {isSubmitted && (
        <section className="success-message" aria-live="polite">
          <h2>Validation Successful!</h2>
          <p>Your form passed all validation checks.</p>
          <p>
            <strong>Name:</strong> {formData.name.trim()}
          </p>
          <p>
            <strong>Email:</strong> {formData.email.trim()}
          </p>
        </section>
      )}
    </main>
  );
}

export default App;
