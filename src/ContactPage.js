import React from 'react';
import ContactForm from './ContactForm'; // Ensure this component is created

const ContactPage = () => {
  return (
    <div className="contact-page bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="header bg-gray-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl">We'd love to hear from you. Please fill out the form below to get in touch.</p>
        </div>
      </header>

      {/* Contact Form */}
      <section className="contact-form py-16">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <p className="text-sm">&copy; 2024 ORB Media. All Rights Reserved.</p>
          </div>
          <div className="social-links flex justify-center space-x-4">
            <a href="https://instagram.com/insta_orbmedia" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
