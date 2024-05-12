import { useState } from "react";

export const Forms = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    
        // Clear error message for the field when user starts typing
        setErrors({
          ...errors,
          [name]: '', // Clear error message for this field
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
          // Form is valid, submit the data
          console.log('Form submitted:', formData);
        } else {
          setErrors(validationErrors);
        }
      };
    
      const validateForm = (data) => {
        let errors = {};
    
        if (!data.username.trim()) {
          errors.username = 'Username is required';
        }
    
        if (!data.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          errors.email = 'Email is invalid';
        }
    
        if (!data.password.trim()) {
          errors.password = 'Password is required';
        }
    
        return errors;
      };
    
      return (
        <div>
          <h2>Form Validation Example</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}
