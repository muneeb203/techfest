import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Download, ExternalLink, Star, Filter } from 'lucide-react';

const EventsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  // Removed unused state for modal

  const events = [
    {
      id: 1,
      title: 'TechFest\'25 Peshawar Chapter',
      date: '11th October 2025',
      location: 'University of Peshawar',
      time: '9:00 AM - 6:00 PM',
      participants: '',
      status: 'registration-open',
      city: 'peshawar',
      description: 'Join us for three days of innovation, workshops, and networking in the heart of Peshawar.',
      highlights: ['AI/ML Workshops', 'Startup Pitch Competition', 'Tech Talks', 'Networking Sessions'],
      speakers: ['Khizar Bakhtiyar'],
      image: ''
    },


    {
      id: 4,
      title: 'TechFest\'24 Islamabad (Past)',
      date: 'February 20-21, 2025',
      location: 'Air University',
      time: '10:00 AM - 4:00 PM',
      participants: '1800+',
      status: 'completed',
      city: 'islamabad',
      description: 'Our successful inaugural event in the capital city with amazing participation.',
      highlights: ['Cloud Computing', 'Data Science', 'DevOps', 'Open Source'],
      speakers: ['Dr. Umar Baig'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Past Events' },
    { id: 'peshawar', label: 'Peshawar' },
    { id: 'karachi', label: 'Karachi' },
    { id: 'lahore', label: 'Lahore' },
    { id: 'islamabad', label: 'Islamabad' }
  ];

  const filteredEvents = events.filter(event => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'upcoming') return event.status === 'registration-open' || event.status === 'coming-soon';
    if (selectedFilter === 'completed') return event.status === 'completed';
    return event.city === selectedFilter;
  });

  const handleRegistration = (event: any) => {
    // Open Google Form in new tab for registration
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfgh7v9gxfclcWDjEKySz6kO7Ir6JPcOFYKexttLVKzo16u-Q/viewform', '_blank');
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            TechFest Events
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join us across Pakistan for unforgettable tech experiences, workshops, and networking opportunities
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-gray-400">
            <Filter className="w-5 h-5" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 border border-blue-500/30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredEvents.map((event) => (
            <div key={event.id} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 transform hover:scale-[1.02]">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                    event.status === 'registration-open' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : event.status === 'coming-soon'
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}>
                    {event.status === 'registration-open' ? 'Registration Open' : 
                     event.status === 'coming-soon' ? 'Coming Soon' : 'Completed'}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                  <p className="text-gray-400 mb-6">{event.description}</p>

                  {/* Event Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{event.participants} Expected</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-white mb-3">Event Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Speakers */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-white mb-3">Featured Speakers:</h4>
                    <div className="flex items-center space-x-2">
                      {event.speakers.slice(0, 3).map((speaker, index) => (
                        <div key={index} className="flex items-center space-x-1">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-medium">{speaker.charAt(0)}</span>
                          </div>
                          <span className="text-xs text-gray-400">{speaker}</span>
                        </div>
                      ))}
                      {event.speakers.length > 3 && (
                        <span className="text-xs text-gray-500">+{event.speakers.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {event.status === 'registration-open' && (
                      <button 
                        onClick={() => handleRegistration(event)}
                        className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <span>Register Now</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                    
                    {event.status === 'coming-soon' && (
                      <button className="flex-1 py-3 bg-slate-700/50 text-gray-300 rounded-lg font-medium border border-slate-600 hover:bg-slate-700 transition-all duration-300">
                        Get Notified
                      </button>
                    )}

                    <button className="px-6 py-3 border border-blue-500/50 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Agenda</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* No Events Found */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 opacity-50">
              <Calendar className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Events Found</h3>
            <p className="text-gray-400">Try adjusting your filters to see more events.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;