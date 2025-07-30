import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Twitter, Filter } from 'lucide-react';

const TeamPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: 'Muneeb Qureshi',
      role: 'Founder & CEO',
      category: 'core',
      image: 'images/muneeb.jpg',
      bio: 'Visionary leader with 10+ years in tech industry',
      social: {
        linkedin: 'https://www.linkedin.com/in/muneebqureshi2003/',
        instagram: 'https://www.instagram.com/muneeb',
      }
    },
    {
      id: 2,
      name: 'Syed Muhammad Asad',
      role: 'CTO',
      category: 'core',
      image: 'images/asad.jpg',
      bio: 'Tech enthusiast and innovation driver',
      social: {
        linkedin: '#',
        instagram: 'https://www.instagram.com/sm.asad._56/'
      }
    },
    {
      id: 3,
      name: 'Roshan Mughal',
      role: 'Head of Events',
      category: 'core',
      image: 'images/roshan.jpg',
      bio: 'Event management expert with creative flair',
      social: {
        linkedin: '#',
        instagram: 'https://www.instagram.com/roshaaan.m/'
      }
    },
    {
      id: 4,
      name: 'Burhan',
      role: 'Chapter Lead-Peshawar',
      category: 'chapter-lead',
      image: '',
      bio: 'Event management expert with creative flair',
      social: {
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      id: 5,
      name: 'Fawad Raza Kazmi',
      role: 'Logisstics Manager',
      category: 'core',
      image: '',
      bio: 'Event management expert with creative flair',
      social: {
        linkedin: '#',
        instagram: '#'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Team', count: teamMembers.length },
    { id: 'core', label: 'Core Team', count: teamMembers.filter(m => m.category === 'core').length },
    { id: 'chapter-lead', label: 'Chapter Lead', count: teamMembers.filter(m => m.category === 'chapter-lead').length },
    { id: 'volunteer', label: 'Volunteers', count: teamMembers.filter(m => m.category === 'volunteer').length }
  ];

  const filteredMembers = teamMembers.filter(member => 
    selectedFilter === 'all' || member.category === selectedFilter
  );

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'github': return Github;
      case 'linkedin': return Linkedin;
      case 'instagram': return Instagram;
      case 'twitter': return Twitter;
      default: return null;
    }
  };

  const getSocialColor = (platform) => {
    switch (platform) {
      case 'github': return 'hover:text-gray-400';
      case 'linkedin': return 'hover:text-blue-400';
      case 'instagram': return 'hover:text-pink-400';
      case 'twitter': return 'hover:text-sky-400';
      default: return 'hover:text-blue-400';
    }
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The passionate individuals behind TechFest Pakistan, working together to create amazing tech experiences
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {filters.map((filter) => (
            <div key={filter.id} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
                {filter.count}
              </div>
              <div className="text-gray-400">{filter.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-gray-400">
            <Filter className="w-5 h-5" />
            <span className="text-sm font-medium">Filter by role:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 border border-blue-500/30'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                selectedFilter === filter.id 
                  ? 'bg-white/20' 
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member) => (
            <div key={member.id} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    member.category === 'core' 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : member.category === 'media'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {member.category === 'core' ? 'Core' : member.category === 'media' ? 'Media' : 'Volunteer'}
                  </div>

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const IconComponent = getSocialIcon(platform);
                      if (!IconComponent) return null;
                      
                      return (
                        <a
                          key={platform}
                          href={url}
                          className={`p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg text-gray-300 transition-all duration-300 transform hover:scale-110 ${getSocialColor(platform)}`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-20">
          <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Want to Join Our Team?</h3>
            <p className="text-gray-400 mb-8">
              We're always looking for passionate individuals to help us create amazing tech experiences. 
              Join our mission to foster innovation and technology in Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <button className="px-8 py-4 border border-blue-500/50 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 opacity-50">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Team Members Found</h3>
            <p className="text-gray-400">Try adjusting your filters to see more team members.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;