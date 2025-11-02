import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Page.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    query: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // EmailJS configuration
    // TODO: Replace these with your EmailJS credentials
    // 1. Sign up at https://www.emailjs.com/ (free account)
    // 2. Create an Email Service (Gmail, Outlook, etc.)
    // 3. Create an Email Template
    // 4. Get your Public Key from Account settings
    // See EMAILJS_SETUP.md for detailed instructions
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    // Check if EmailJS is configured
    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      setStatus({
        type: 'error',
        message: 'EmailJS is not configured yet. Please check EMAILJS_SETUP.md for instructions. You can contact us directly at sales@yadardageetatraders.com'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_mobile: formData.mobile,
          message: formData.query,
          to_email: 'sales@yadardageetatraders.com',
        },
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', mobile: '', query: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly at sales@yadardageetatraders.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="content-section">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        
        <div className="contact-wrapper">
          <div className="contact-info-box">
            <h2>Get in Touch</h2>
            <p>Have questions or need assistance? We're here to help!</p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <strong>📧 Email:</strong>
                <a href="mailto:sales@yadardageetatraders.com">sales@yadardageetatraders.com</a>
              </div>
              <div className="contact-detail-item">
                <strong>📱 Phone:</strong>
                <a href="tel:+918884444852">+91 8884444852</a>
              </div>
              <div className="contact-detail-item">
                <strong>📍 Address:</strong>
                <p>10-6-67/2/C, Raparthi Nagar, Khammam, Telangana</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number *</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Your mobile number"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="query">Your Query *</label>
              <textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                required
                placeholder="Please tell us how we can help you..."
                rows="6"
              ></textarea>
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

