import React, { useState } from 'react';
import { Award, ExternalLink, Filter, Star, Building, Briefcase, Users, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PartnersPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const partners = [
    // Tech Sponsors
    {
      id: 1,
      name: 'Edvoy Consultants',
      category: 'tech-sponsor',
      logo: 'images/sponsors/19.png',
      description: 'Connecting students with global education opportunities',
      website: 'www.edvoy.com',
      tier: 'platinum',
      since: '2025'
    },
    {
      id: 2,
      name: 'Cruteez',
      category: 'tech-sponsor',
      logo: 'images/sponsors/20.png',
      description: '',
      website: 'www.cruteez.pk',
      tier: 'platinum',
      since: '2025'
    },
    {
      id: 3,
      name: 'Crave Cookie Dou',
      category: 'tech-sponsor',
      logo: 'images/sponsors/21.png',
      description: 'Delicious cookie dough brand with a mission to spread joy',
      website: '#',
      tier: 'gold',
      since: '2025'
    },
    {
      id: 4,
      name: 'Dough',
      category: 'tech-sponsor',
      logo: 'images/sponsors/22.png',
      description: '',
      website: 'www.doughpakistan.com',
      tier: 'platinum',
      since: '2025'
    },
    {
      id: 5,
      name: 'Howdy',
      category: 'tech-sponsor',
      logo: 'images/sponsors/23.png',
      description: '',
      website: 'www.howdy.pk',
      tier: 'gold',
      since: '2024'
    },
    {
      id: 6,
      name: 'Islamabad.AI',
      category: 'tech-sponsor',
      logo: 'images/collaborative partners/13.png',
      description: 'Empowering AI innovation in Pakistan',
      website: '#',
      tier: 'silver',
      since: '2024'
    },
    // Academic Partners
    {
      id: 7,
      name: 'AUCIS',
      category: 'tech-sponsor',
      logo: 'images/collaborative partners/14.png',
      description: 'Leading AI research and development organization',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 8,
      name: 'Discover Pakistan',
      category: 'media',
      logo: 'images/media partners/15.png',
      description: 'Promoting Pakistan culture and tourism through media',
      website: 'www.discoverpakistan.tv',
      tier: 'partner',
      since: '2025'
    },
    {
      id: 9,
      name: 'Verified Pakistan',
      category: 'media',
      logo: 'images/media partners/16.png',
      description: 'Connecting verified businesses with consumers',
      website: 'theverifiedpakistan.com',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 10,
      name: 'Sig Gossip',
      category: 'media',
      logo: 'images/media partners/17.png',
      description: 'Empowering businesses through innovative media solutions',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
   
    {
      id: 11,
      name: 'Team Islamabadians',
      category: 'media',
      logo: 'images/media partners/18.png',
      description: 'Leading tech media platform covering startup ecosystem',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 12,
      name: 'Youth Organization Pakistan',
      category: 'academic',
      logo:  'images/community partners/1.png',
      description: 'Empowering youth through education and community initiatives',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 13,
      name: 'Stem Academy',
      category: 'academic',
      logo: 'images/community partners/2.png',
      description: 'Empowering students through STEM education',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 12,
      name: 'Softech IUIC Club',
      category: 'academic',
      logo:  'images/community partners/3.png',
      description: 'Fostering innovation and technology skills among students',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 13,
      name: 'Society of IS',
      category: 'academic',
      logo: 'images/community partners/4.png',
      description: 'Connecting tech enthusiasts and professionals across Pakistan',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 14,
      name: 'IEEE WIE MCS Student Branch',
      category: 'academic',
      logo: 'images/community partners/5.png',
      description: 'Empowering tech community through events and initiatives',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 15,
      name: 'ASCE NUST Student Chapter',
      category: 'academic',
      logo: 'images/community partners/6.png',
      description: 'Empowering engineering students through collaboration and innovation',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 16,
      name: 'NUST Science Society',
      category: 'academic',
      logo: 'images/community partners/7.png',
      description: 'Fostering scientific research and innovation among students',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 17,
      name: 'CSS COMSATS, Islamabad',
      category: 'academic',
      logo: 'images/community partners/8.png',
      description: 'Connecting students with industry leaders and opportunities',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 18,
      name: 'GDGOC PIEAS',
      category: 'academic',
      logo: 'images/community partners/9.png',
      description: 'Empowering developers through community-driven initiatives',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 19,
      name: 'FAST Data Science Society',
      category: 'academic',
      logo: 'images/community partners/10.png',
      description: 'Empowering students through data science education and projects',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 20,
      name: 'NUML Computer Science Society',
      category: 'academic',
      logo: 'images/community partners/11.png',
      description: 'Connecting tech enthusiasts and professionals across Pakistan',
      website: '#',
      tier: 'partner',
      since: '2024'
    },
    {
      id: 21,
      name: 'Edwardes College Peshawar',
      category: 'academic',
      logo: 'images/community partners/12.png',
      description: 'Empowering students through education and community initiatives',
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

  const getTierBadgeClass = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'gold':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'silver':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-green-500/20 text-green-400 border-green-500/30';
    }
  };

  const getTierBadgeLabel = (tier: string) => {
    switch (tier) {
      case 'platinum': return 'Platinum Sponsor';
      case 'gold': return 'Gold Sponsor';
      case 'silver': return 'Silver Sponsor';
      default: return 'Partner';
    }
  };

  const getTierAccentClass = (tier: string) => {
    switch (tier) {
      case 'platinum': return 'bg-gradient-to-r from-blue-400 to-cyan-400';
      case 'gold': return 'bg-gradient-to-r from-yellow-400 to-orange-400';
      case 'silver': return 'bg-gradient-to-r from-gray-300 to-gray-400';
      default: return 'bg-gradient-to-r from-blue-400 to-teal-400';
    }
  };

  const formatWebsite = (url: string) => {
    if (!url || url === '#') return '#';
    return url.startsWith('http') ? url : `https://${url}`;
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <Helmet>
        <title>TechFest Pakistan - Our Partners</title>
        <meta name="description" content="Discover our valued partners and sponsors supporting TechFest Pakistan. From tech companies to academic institutions and media partners, meet the organizations driving innovation together." />
        <meta name="keywords" content="TechFest, partners, sponsors, collaborators, tech companies, academic institutions, media partners, Pakistan" />
      </Helmet>
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
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              {partners.length}
            </div>
            <div className="text-gray-400">Total Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              {partners.filter(p => p.category === 'tech-sponsor').length}
            </div>
            <div className="text-gray-400">Tech Sponsors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              {partners.filter(p => p.category === 'academic').length}
            </div>
            <div className="text-gray-400">Universities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
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
          {filteredPartners.map((partner) => (
            <div key={partner.id} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                {/* Partner Logo */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center p-6">
                  <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full w-full h-full object-contain rounded-lg filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  {/* Tier Badge */}
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-4 border ${getTierBadgeClass(partner.tier)}`}>
                    {getTierBadgeLabel(partner.tier)}
                  </div>

                  {/* Info */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {partner.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {partner.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>Partner since {partner.since}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <a
                    href={formatWebsite(partner.website)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-slate-700/50 text-gray-300 rounded-lg font-medium border border-slate-600 hover:bg-slate-700 hover:text-white transition-all duration-300 group-hover:border-blue-500/50"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Website</span>
                  </a>
                </div>

                {/* Tier Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${getTierAccentClass(partner.tier)}`}></div>
              </div>
            </div>
          ))}
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
              <a href="https://forms.gle/Z2EzHtqySSWK6cR59" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 inline-block text-center">
                Register Your Society
              </a>
              <button className="px-8 py-4 border border-blue-500/50 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                Partnership Deck
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;