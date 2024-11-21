import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We\'ll get back to you soon!'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-dark-200 border border-dark-50/10 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent text-white"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-dark-200 border border-dark-50/10 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent text-white"
          required
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-dark-200 border border-dark-50/10 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent text-white"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-dark-200 border border-dark-50/10 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent text-white"
          required
        ></textarea>
      </div>

      {submitStatus.message && (
        <div className={`p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
            : 'bg-red-500/10 text-red-400 border border-red-500/20'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <button 
        type="submit" 
        className={`w-full btn btn-primary flex items-center justify-center ${
          isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
        }`}
        disabled={isSubmitting}
      >
        <MessageSquare className="w-4 h-4 mr-2" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;