import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [data, setData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    description: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://nchpDev.github.io/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);

        // Show success toast
        toast.success('Message sent successfully!');

        // Clear the form data after successful submission
        setData({
          name: '',
          lastname: '',
          email: '',
          phone: '',
          company: '',
          description: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Failed to send email:', errorData.message);

        // Show error toast
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);

      // Show error toast
      toast.error('An unexpected error occurred. Please contact me through my social media.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-me" className="contact-container">
      <div className="contact-section">
        <h2>
          <b>Contact Me:</b>
        </h2>
        <form method="post" onSubmit={handleSubmit}>
          <div className="input-group">
            <div>
              <label htmlFor="name">
                <span>*</span>
                <b>Nombre</b> (<i>Name</i>):
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastname">
                <span>*</span>
                <b>Apellido</b> (<i>Last Name</i>):
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                required
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <div>
              <label htmlFor="email">
                <span>*</span>
                <b>Email</b>:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">
                <b>Celular</b> (<i>Phone Number</i>):
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]+"
                placeholder='+54 11 4455 6677'
                value={data.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <div>
              <label htmlFor="company">
                <b>Empresa</b> (<i>Company</i>):
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={data.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">
                <b>Que Necesitas?</b> (<i>Your needs</i>):
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={data.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className='contact-btn' type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
          <ToastContainer position="bottom-right" autoClose={3500} hideProgressBar={false} closeOnClick={true} pauseOnHover={false} draggable={true} theme='dark' />
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
