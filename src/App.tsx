import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Calendar, Users, Image, Award, Mail, Phone, MapPin, Instagram, Linkedin, Github, Sun, Moon } from 'lucide-react';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import TeamPage from './components/TeamPage';
import GalleryPage from './components/GalleryPage';
import PartnersPage from './components/PartnersPage';
import ContactPage from './components/ContactPage';
import Agenda from './components/Agenda';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-10-11T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'events', label: 'Events', icon: Calendar },
   // { id: 'agenda', label: 'Agenda', icon: Calendar },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'partners', label: 'Partners', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage timeLeft={timeLeft} setCurrentPage={setCurrentPage} />;
      case 'events': return <EventsPage setCurrentPage={setCurrentPage} />;
      case 'agenda': return <Agenda />;
      case 'team': return <TeamPage />;
      case 'gallery': return <GalleryPage />;
      case 'partners': return <PartnersPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage timeLeft={timeLeft} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'dark bg-gradient-to-br from-black to-blue-900' : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50'}`}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${isDarkMode ? 'bg-slate-900/80 border-blue-800/50' : 'bg-white/80 border-blue-200/50'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/images/logo_bgremove.png" alt="TechFest Logo" className="w-14 h-14 object-contain" />
              <div>
                <h1 className={`text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent`}>
                  TechFest
                </h1>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pakistan</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? `${isDarkMode ? 'text-blue-400' : 'text-blue-600'} bg-gradient-to-r from-blue-500/10 to-teal-500/10`
                      : `${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} hover:bg-blue-500/5`
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-white text-slate-700 hover:bg-gray-100'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-slate-700 hover:bg-gray-100'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-slate-800/90' : 'bg-white/90'} backdrop-blur-md`}>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? `${isDarkMode ? 'text-blue-400 bg-blue-500/10' : 'text-blue-600 bg-blue-500/10'}`
                      : `${isDarkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-500/5'}`
                  }`}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className={`mt-20 border-t ${isDarkMode ? 'bg-slate-900/50 border-blue-800/50' : 'bg-white/50 border-blue-200/50'} backdrop-blur-md`}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/images/logo_bgremove.png" alt="TechFest Logo" className="w-16  h-16 object-contain rounded-lg" />
                <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>TechFest Pakistan</span>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Premier tech event bringing together innovators, developers, and tech enthusiasts across Pakistan.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Quick Links</h3>
              <div className="space-y-2">
                {navigationItems.slice(0, 4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`block text-sm transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Contact Info</h3>
              <div className="space-y-3">
                <div className={`flex items-center space-x-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Mail className="w-4 h-4" />
                  <span>info@techfestpk.com</span>
                </div>
                <div className={`flex items-center space-x-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Phone className="w-4 h-4" />
                  <span>+92 330 0078040</span>
                </div>
                <div className={`flex items-center space-x-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin className="w-4 h-4" />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Follow Us</h3>
              <div className="flex space-x-3">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/techfest.official/', color: 'from-pink-500 to-purple-500' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/company/techfest-25/ ', color: 'from-blue-600 to-blue-700' },
                  // { icon: Github, href: '#', color: 'from-gray-700 to-gray-800' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 rounded-lg bg-gradient-to-r ${social.color} text-white hover:scale-110 transition-transform duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`mt-8 pt-8 border-t text-center text-sm ${isDarkMode ? 'border-blue-800/50 text-gray-400' : 'border-blue-200/50 text-gray-600'}`}>
            <p>&copy; 2025 TechFest Pakistan. All rights reserved.</p>
            <p>Developed by <a href="https://convosol.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">ConvoSol</a>.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;