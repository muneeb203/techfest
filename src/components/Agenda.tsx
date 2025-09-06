import React from 'react';
import { Calendar, MapPin, Download, ExternalLink, Users, Award } from 'lucide-react';

const Agenda = () => {
  const handleRegisterNow = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfgh7v9gxfclcWDjEKySz6kO7Ir6JPcOFYKexttLVKzo16u-Q/viewform', '_blank');
  };

  const handleSponsorshipPackageDownload = () => {
    // Placeholder for sponsorship package download
    alert('Sponsorship package download will be available soon!');
  };

  const handleSponsorshipForm = () => {
    // Placeholder for sponsorship form
    alert('Sponsorship form will be available soon!');
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <button
            onClick={handleRegisterNow}
            className="flex items-center justify-center space-x-3 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>Register Now</span>
            <ExternalLink className="w-5 h-5" />
          </button>

          <button
            onClick={handleSponsorshipPackageDownload}
            className="flex items-center justify-center space-x-3 py-4 border border-blue-500/50 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 backdrop-blur-sm transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            <span>Sponsorship Package</span>
          </button>

          <button
            onClick={handleSponsorshipForm}
            className="flex items-center justify-center space-x-3 py-4 border border-teal-500/50 text-teal-400 rounded-lg font-medium hover:bg-teal-500/10 backdrop-blur-sm transition-all duration-300"
          >
            <Award className="w-5 h-5" />
            <span>Sponsorship Form</span>
          </button>

          <button
            onClick={handleCommunityAgendaDownload}
            className="flex items-center justify-center space-x-3 py-4 border border-purple-500/50 text-purple-400 rounded-lg font-medium hover:bg-purple-500/10 backdrop-blur-sm transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            <span>Community Agenda</span>
          </button>
        </div>

        {/* Society Registration Link */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Want to register your society for TechFest'25?</p>
          <button
            onClick={handleSocietyRegistration}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Users className="w-5 h-5" />
            <span>Register Your Society</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
