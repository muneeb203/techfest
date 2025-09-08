import React from 'react';
import { Calendar, MapPin, Download, ExternalLink, Users, Award, ChevronRight } from 'lucide-react';

const Agenda = () => {
  const handleRegisterNow = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfgh7v9gxfclcWDjEKySz6kO7Ir6JPcOFYKexttLVKzo16u-Q/viewform', '_blank');
  };

  const handleSponsorshipPackageDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/Techfest%20Sponsorship%20Proposal%20.pdf';
    link.download = 'Techfest Sponsorship Proposal.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSponsorshipForm = () => {
    window.open('https://wa.me/923300078040', '_blank');
  };

  const handleCommunityAgendaDownload = () => {
    // Placeholder for community agenda download
    alert('Community agenda download will be available soon!');
  };

  const handleSocietyRegistration = () => {
    // Placeholder for society registration form
    alert('Society registration form will be available soon!');
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        {/* Venue Information */}
        <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8 mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <MapPin className="w-8 h-8 text-blue-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Venue</h2>
              <p className="text-gray-400">University of Peshawar</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium">11th October 2025</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium">9:00 AM - 6:00 PM</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium">Innovation & Networking</p>
            </div>
          </div>
          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden border border-blue-500/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.774673489874!2d71.48440339590178!3d33.99832100024488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d92de8c4cd1d21%3A0x56a608fc5c4c5df6!2sUniversity%20of%20Peshawar!5e0!3m2!1sen!2s!4v1757231684917!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="University of Peshawar Location"
            ></iframe>
          </div>
        </div>

        {/* Registration & Community Section */}
        <div className="bg-slate-800/30 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Join TechFest'25</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <button
                onClick={handleRegisterNow}
                className="w-full flex items-center justify-center space-x-3 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 mb-3"
              >
                <span>Register Now</span>
                <ExternalLink className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-400">Secure your spot at Pakistan's premier tech festival</p>
            </div>

            <div className="text-center">
              <button
                onClick={handleCommunityAgendaDownload}
                className="w-full flex items-center justify-center space-x-3 py-4 border border-purple-500/50 text-purple-400 rounded-lg font-medium hover:bg-purple-500/10 backdrop-blur-sm transition-all duration-300 mb-3"
              >
                <Download className="w-5 h-5" />
                <span>Community Agenda</span>
              </button>
              <p className="text-sm text-gray-400">Download the detailed community event schedule</p>
            </div>
          </div>
        </div>

        {/* Sponsorship Section */}
        <div className="bg-slate-800/30 backdrop-blur-md border border-teal-500/20 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Sponsorship Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <button
                onClick={handleSponsorshipPackageDownload}
                className="w-full flex items-center justify-center space-x-3 py-4 border border-blue-500/50 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 backdrop-blur-sm transition-all duration-300 mb-3"
              >
                <Download className="w-5 h-5" />
                <span>Sponsorship Package</span>
              </button>
              <p className="text-sm text-gray-400">Explore our comprehensive sponsorship tiers and benefits</p>
            </div>

            <div className="text-center">
              <button
                onClick={handleSponsorshipForm}
                className="w-full flex items-center justify-center space-x-3 py-4 border border-teal-500/50 text-teal-400 rounded-lg font-medium hover:bg-teal-500/10 backdrop-blur-sm transition-all duration-300 mb-3"
              >
                <Award className="w-5 h-5" />
                <span>Contact Us for Sponsorship</span>
              </button>
              <p className="text-sm text-gray-400">Apply to become a TechFest sponsor</p>
            </div>
          </div>
        </div>

        {/* Society Registration & Community Sponsorship Section */}
        <div className="bg-slate-800/30 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Society & Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <button
                onClick={handleSocietyRegistration}
                className="w-full flex items-center justify-center space-x-3 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 mb-3"
              >
                <Users className="w-5 h-5" />
                <span>Register Your Society</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <p className="text-sm text-gray-400">Bring your community and showcase your society's innovations</p>
            </div>

            <div className="text-center">
              <button
                onClick={handleCommunityAgendaDownload}
                className="w-full flex items-center justify-center space-x-3 py-4 border border-green-500/50 text-green-400 rounded-lg font-medium hover:bg-green-500/10 backdrop-blur-sm transition-all duration-300 mb-3"
              >
                <Download className="w-5 h-5" />
                <span>Community Sponsor</span>
              </button>
              <p className="text-sm text-gray-400">Download community sponsorship package and guidelines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
