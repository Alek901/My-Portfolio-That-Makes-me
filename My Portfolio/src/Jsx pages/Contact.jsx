import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors(prev => ({...prev, [name]: 'This field is required'}));
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors(prev => ({...prev, [name]: 'Please enter a valid email address'}));
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onBlur={handleBlur}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onBlur={handleBlur}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onBlur={handleBlur}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
