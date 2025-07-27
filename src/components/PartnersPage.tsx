import React, { useState } from 'react';
import { Award, ExternalLink, Filter, Star, Building, Briefcase, Users, Globe } from 'lucide-react';

const PartnersPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const partners = [
    // Tech Sponsors
    {
      id: 1,
      name: 'Microsoft Pakistan',
      category: 'tech-sponsor',
      logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Leading technology partner providing cloud services and development tools',
      website: '#',
      tier: 'platinum',
      since: '2024'
    },
    {
      id: 2,
      name: 'Google Developers',
      category: 'tech-sponsor',
      logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Supporting developer communities and providing cloud infrastructure',
      website: '#',
      tier: 'platinum',
      since: '2024'
    },
    {
      id: 3,
      name: 'Meta for Developers',
      category: 'tech-sponsor',
      logo: 'https://images.pexels.com/photos/4348407/pexels-photo-4348407.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Empowering developers with cutting-edge social technologies',
      website: '#',
      tier: 'gold',
      since: '2024'
    },
    {
      id: 4,
      name: 'Amazon Web Services',
      category: 'tech-sponsor',
      logo: 'https://images.pexels.com/photos/4348410/pexels-photo-4348410.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Cloud computing platform and startup support programs',
      website: '#',
      tier: 'platinum',
      since: '2024'
    },
    {
      id: 5,
      name: 'GitHub',
      category: 'tech-sponsor',
      logo: 'https://images.pexels.com/photos/4348413/pexels-photo-4348413.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Developer platform for collaboration and open source projects',
      website: '#',
      tier: 'gold',
      since: '2024'
    },
    {
      id: 6,
      name: 'Vercel',
      category: 'tech-sponsor',
      logo: 'https://images.pexels.com/photos/4348416/pexels-photo-4348416.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Frontend cloud platform for modern web development',
      website: '#',
      tier: 'silver',
      since: '2024'
    },
    // Academic Partners
    {
      id: 7,
      name: 'NUST University',
      category: 'academic',
      logo: 'https://images.pexels.com/photos/4348419/pexels-photo-4348419.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Leading engineering and technology university in Pakistan',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 8,
      name: 'LUMS University',
      category: 'academic',
      logo: 'https://images.pexels.com/photos/4348422/pexels-photo-4348422.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Premier business and technology education institution',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 9,
      name: 'University of Karachi',
      category: 'academic',
      logo: 'https://images.pexels.com/photos/4348425/pexels-photo-4348425.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Largest public university supporting tech education',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 10,
      name: 'NED University',
      category: 'academic',
      logo: 'https://images.pexels.com/photos/4348428/pexels-photo-4348428.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Engineering excellence and innovation hub',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    // Media Partners
    {
      id: 11,
      name: 'TechJuice',
      category: 'media',
      logo: 'https://images.pexels.com/photos/4348431/pexels-photo-4348431.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Leading tech media platform covering startup ecosystem',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 12,
      name: 'Propakistani',
      category: 'media',
      logo: 'https://images.pexels.com/photos/4348434/pexels-photo-4348434.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Premier technology news and insights platform',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 13,
      name: 'Startup Pakistan',
      category: 'media',
      logo: 'https://images.pexels.com/photos/4348437/pexels-photo-4348437.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Connecting entrepreneurs and celebrating innovation',
      website: '#',
      tier: 'partner',
      since: '2024'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Partners', icon: Globe, count: partners.length },
    { id: 'tech-sponsor', label: 'Tech Sponsors', icon: Building, count: partners.filter(p => p.category === 'tech-sponsor').length },
    { id: 'academic', label: 'Academic Partners', icon: Users, count: partners.filter(p => p.category === 'academic').length },
    { id: 'media', label: 'Media Partners', icon: Briefcase, count: partners.filter(p => p.category === 'media').length }
  ];

  const filteredPartners = partners.filter(partner => 
    selectedFilter === 'all' || partner.category === selectedFilter
  );

  const getTierColor = (tier) => {
    switch (tier) {
      case 'platinum': return 'from-blue-400 to-cyan-400';
      case 'gold': return 'from-yellow-400 to-orange-400';
      case 'silver': return 'from-gray-300 to-gray-400';
      default: return 'from-blue-400 to-teal-400';
    }
  };

  const getTierBadge = (tier) => {
    switch (tier) {
      case 'platinum': return { label: 'Platinum Sponsor', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' };
      case 'gold': return { label: 'Gold Sponsor', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' };
      case 'silver': return { label: 'Silver Sponsor', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' };
      default: return { label: 'Partner', color: 'bg-green-500/20 text-green-400 border-green-500/30' };
    }
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're proud to collaborate with industry leaders, academic institutions, and media partners who share our vision of fostering innovation in Pakistan's tech ecosystem.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              {partners.length}
            </div>
            <div className="text-gray-400">Total Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              {partners.filter(p => p.category === 'tech-sponsor').length}
            </div>
            <div className="text-gray-400">Tech Sponsors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              {partners.filter(p => p.category === 'academic').length}
            </div>
            <div className="text-gray-400">Universities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              {partners.filter(p => p.category === 'media').length}
            </div>
            <div className="text-gray-400">Media Partners</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-gray-400">
            <Filter className="w-5 h-5" />
            <span className="text-sm font-medium">Filter by category:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center space-x-3 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 border border-blue-500/30'
              }`}
            >
              <filter.icon className="w-4 h-4" />
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

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredPartners.map((partner) => {
            const tierBadge = getTierBadge(partner.tier);
            return (
              <div key={partner.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                  {/* Partner Logo */}
                  <div className="relative h-32 overflow-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center p-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 object-contain rounded-lg filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    {/* Tier Badge */}
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-4 border ${tierBadge.color}`}>
                      {tierBadge.label}
                    </div>

                    {/* Partner Info */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {partner.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Partner since {partner.since}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>Verified</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <a
                      href={partner.website}
                      className="w-full flex items-center justify-center space-x-2 py-3 bg-slate-700/50 text-gray-300 rounded-lg font-medium border border-slate-600 hover:bg-slate-700 hover:text-white transition-all duration-300 group-hover:border-blue-500/50"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Website</span>
                    </a>
                  </div>

                  {/* Tier Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getTierColor(partner.tier)}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership CTA */}
        <div className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-12 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Become Our Partner</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our mission to foster innovation and technology in Pakistan. Partner with us to reach thousands of developers, students, and tech enthusiasts across the country.
            </p>
            
            {/* Partnership Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-slate-700/30 rounded-lg border border-blue-500/20">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold text-white mb-2">Platinum</h4>
                <p className="text-xs text-gray-400">Premier sponsorship with maximum visibility</p>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg border border-yellow-500/20">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold text-white mb-2">Gold</h4>
                <p className="text-xs text-gray-400">Enhanced partnership benefits</p>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg border border-gray-500/20">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold text-white mb-2">Silver</h4>
                <p className="text-xs text-gray-400">Strategic collaboration opportunities</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                Partner With Us
              </button>
              <button className="px-8 py-4 border border-blue-500/50 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                Partnership Deck
              </button>
            </div>
          </div>
        </div>

        {/* No Results */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 opacity-50">
              <Award className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Partners Found</h3>
            <p className="text-gray-400">Try adjusting your filters to see more partners.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnersPage;