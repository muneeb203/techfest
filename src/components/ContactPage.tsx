import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, Instagram, Linkedin, Github, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeLoading, setSubscribeLoading] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [subscribeError, setSubscribeError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://formspree.io/f/xvgbvlrz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map((error: any) => error.message).join(', '));
        } else {
          setError('Failed to send message. Please try again later.');
        }
      }
    } catch (err: unknown) {
      setError('Failed to send message. Please check your internet connection and try again.');
    } finally {
      setIsLoading(false);
      if (isSubmitted) {
        setTimeout(() => {
          setIsSubmitted(false);
          setError(null);
        }, 3000);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubscribe = async () => {
    if (!subscribeEmail) {
      setSubscribeError('Email is required');
      return;
    }
    setSubscribeLoading(true);
    setSubscribeError(null);
    try {
      console.log('Sending subscribe request with email:', subscribeEmail);
      const response = await fetch('https://script.google.com/macros/s/AKfycbyzDQIhZK0WrOuiVGSlCRQPvWKVutVIZkXwYkQ6R73xIYQIKDt6uGw9uVkWIR5Ps5R2AQ/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: subscribeEmail })
      });
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      if (data.result === 'success') {
        setSubscribeSuccess(true);
        setSubscribeEmail('');
        setTimeout(() => setSubscribeSuccess(false), 3000);
      } else {
        setSubscribeError(data.message || 'Failed to subscribe');
      }
    } catch (err) {
      console.error('Subscribe error:', err);
      setSubscribeError('Failed to subscribe. Please try again.');
    } finally {
      setSubscribeLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'info@techfestpk.com',
      description: 'We typically respond within 24 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+92 330 0078040',
      description: 'Available Mon-Fri, 9 AM - 6 PM',
      color: 'from-green-500 to-teal-500'
    }
    // {
    //   icon: MapPin,
    //   label: 'Visit Us',
    //   value: 'Islamabad, Pakistan',
    //   description: 'Our headquarters and main office',
    //   color: 'from-purple-500 to-pink-500'
    // },
    // {
    //   icon: Globe,
    //   label: 'Website',
    //   value: 'techfestpakistan.com',
    //   description: 'Official website and resources',
    //   color: 'from-orange-500 to-red-500'
    // }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'speaker', label: 'Speaker Application' },
    { value: 'volunteer', label: 'Volunteer Application' },
    { value: 'media', label: 'Media & Press' },
    { value: 'sponsorship', label: 'Sponsorship' },
    { value: 'support', label: 'Technical Support' }
  ];

  const officeHours = [
    // { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', status: 'open' },
    // { day: 'Saturday', hours: '10:00 AM - 4:00 PM', status: 'open' },
    // { day: 'Sunday', hours: 'Closed', status: 'closed' }
  ];

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about TechFest? Want to partner with us? We'd love to hear from you. 
            Reach out and let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Inquiry Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-slate-800">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="inline-flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">We'll be in touch soon</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.label}</h4>
                      <p className="text-blue-400 font-medium">{info.value}</p>
                      <p className="text-sm text-gray-400">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            {/* 
            <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Office Hours</span>
              </h3>
              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300">{schedule.day}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${schedule.status === 'open' ? 'text-white' : 'text-gray-500'}`}>
                        {schedule.hours}
                      </span>
                      <div className={`w-2 h-2 rounded-full ${
                        schedule.status === 'open' ? 'bg-green-400' : 'bg-gray-500'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            */}
             

            {/* Social Media */}
            <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              <div className="space-y-4">
                {[
                  { platform: 'Instagram', handle: '@techfest.official', icon: Instagram, color: 'from-pink-500 to-purple-500', url: 'https://www.instagram.com/techfest.official/' },
                  { platform: 'LinkedIn', handle: 'TechFest Pakistan', icon: Linkedin, color: 'from-blue-600 to-blue-700', url: 'https://www.linkedin.com/company/techfest-25/' },
                  
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center space-x-4 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{social.platform}</div>
                      <div className="text-sm text-gray-400">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Subscribe to our newsletter for the latest updates on events, workshops, and tech news.
              </p>
              {subscribeSuccess ? (
                <div className="text-center py-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-green-400 text-sm font-medium">Subscribed successfully!</p>
                </div>
              ) : (
                <>
                  <div className="flex space-x-2 mb-4">
                    <input
                      type="email"
                      value={subscribeEmail}
                      onChange={(e) => setSubscribeEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="flex-1 px-3 py-2 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                    <button
                      onClick={handleSubscribe}
                      disabled={subscribeLoading}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {subscribeLoading ? '...' : 'Subscribe'}
                    </button>
                  </div>
                  {subscribeError && (
                    <p className="text-red-400 text-sm">{subscribeError}</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How can I register for TechFest events?',
                answer: 'You can register for our events through the Events page on our website. Registration is typically free, but some workshops may have limited seats.'
              },
              {
                question: 'Can I volunteer at TechFest?',
                answer: 'Yes! We welcome volunteers. Please fill out the contact form with "Volunteer Application" as the inquiry type, and we\'ll get back to you with opportunities.'
              },
              {
                question: 'Do you offer sponsorship opportunities?',
                answer: 'Absolutely! We have various sponsorship packages available. Please contact us with "Sponsorship" as the inquiry type for detailed information.'
              },
              {
                question: 'Are the events free to attend?',
                answer: 'Most of our events are free to attend. Some specialized workshops or premium sessions may have a nominal fee to cover materials and refreshments.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6">
                <h4 className="font-semibold text-white mb-3">{faq.question}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
