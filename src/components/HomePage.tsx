import React from 'react';
import { ArrowRight, Calendar, Users, MapPin, Zap, Code, Cpu, Rocket } from 'lucide-react';

interface HomePageProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ timeLeft, setCurrentPage }) => {
  const features = [
    {
      icon: Code,
      title: 'Code & Create',
      description: 'Hackathons, coding competitions, and workshops'
    },
    {
      icon: Cpu,
      title: 'AI & Innovation',
      description: 'Latest trends in AI, ML, and emerging technologies'
    },
    {
      icon: Users,
      title: 'Network & Connect',
      description: 'Meet industry leaders and like-minded developers'
    },
    {
      icon: Rocket,
      title: 'Launch & Grow',
      description: 'Startup pitches, funding opportunities, and mentorship'
    }
  ];

  const upcomingEvents = [
    {
      title: 'TechFest\'25 Peshawar Chapter',
      date: 'March 15-17, 2025',
      location: 'University of Peshawar',
      status: 'Registration Open'
    },
    {
      title: 'TechFest\'25 Karachi Chapter',
      date: 'April 20-22, 2025',
      location: 'NED University',
      status: 'Coming Soon'
    },
    {
      title: 'TechFest\'25 Lahore Chapter',
      date: 'May 10-12, 2025',
      location: 'LUMS University',
      status: 'Coming Soon'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center space-y-8 max-w-4xl">
          {/* Logo Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img src="/images/logo_bgremove.png" alt="TechFest Logo" className="w-44 h-44 object-contain mx-auto transform hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl opacity-20 blur-lg animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            TechFest Pakistan
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Where Innovation Meets <span className="text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text font-semibold">Excellence</span>
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Join Pakistan's premier technology festival bringing together developers, innovators, and tech enthusiasts from across the nation.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 md:space-x-8 my-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-blue-500/30 min-w-[80px]">
                  <div className="text-2xl md:text-4xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                </div>
                <div className="text-sm md:text-base text-gray-400 mt-2 capitalize">{unit}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <button 
              onClick={() => setCurrentPage('events')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => setCurrentPage('events')}
              className="px-8 py-4 border-2 border-blue-500/50 text-blue-400 rounded-full font-semibold text-lg hover:bg-blue-500/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Explore Agenda
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why TechFest?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of technology through workshops, competitions, and networking opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming Chapters
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join us in different cities across Pakistan for an unforgettable tech experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    event.status === 'Registration Open' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {event.status}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{event.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                    {event.status === 'Registration Open' ? 'Register Now' : 'Get Notified'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('events')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>View All Events</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Participants' },
              { number: '50+', label: 'Speakers' },
              { number: '25+', label: 'Workshops' },
              { number: '8', label: 'Cities' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;