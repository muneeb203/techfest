import React, { useState } from 'react';
import { Calendar, MapPin, Download, ExternalLink, Users, Award, ChevronRight, FileText, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import ButtonWithTooltip from './ButtonWithTooltip';
import Modal from './Modal';

const Agenda = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isSponsorshipModalOpen, setIsSponsorshipModalOpen] = useState(false);
  const [isSocietyModalOpen, setIsSocietyModalOpen] = useState(false);
  const [isAmbassadorshipModalOpen, setIsAmbassadorshipModalOpen] = useState(false);

  const [isAmbassadorshipDownloadModalOpen, setIsAmbassadorshipDownloadModalOpen] = useState(false);

  const termsContent = {
    join: "By registering for TechFest'25, you agree to abide by the event code of conduct, provide accurate information, and participate responsibly. Registrations are subject to approval and availability. Refunds are not available after confirmation.",
    sponsorship: "Sponsorship opportunities are available at various tiers. All sponsors must adhere to our branding guidelines and provide materials by the specified deadlines. Terms include exclusive rights, logo placement, and promotional benefits as outlined in the proposal.",
    society: "Society registrations require submission of project details and team information. All participants must be current students or faculty. Societies are responsible for their own transportation, accommodation, and conduct during the event.",
    ambassadorship: (
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-2">🌟 TechFest 2.0 Ambassadorship Program</h2>
          <p className="text-gray-300 leading-relaxed">
            Become the face of TechFest 2.0 at your university or community! As an ambassador, you'll inspire registrations, spread the word, and earn exclusive rewards based on your impact.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-orange-300 mb-3">🎁 Perks Include:</h3>
          <div className="space-y-2 ml-4">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">•</span>
              <span><strong className="text-orange-400">5+ Participants</strong> → Certificate of Appreciation (TechFest 2.0 Ambassador)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">•</span>
              <span><strong className="text-orange-400">15+ Participants</strong> → Free TechFest Pass + Digital Ambassador Badge</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">•</span>
              <span><strong className="text-orange-400">25+ Participants</strong> → Free Pass + TechFest Merchandise (T-shirt, Stickers, Badge)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">•</span>
              <span><strong className="text-orange-400">40+ Participants</strong> → All above perks + On-stage Recognition at TechFest</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">•</span>
              <span><strong className="text-orange-400">70+ Participants</strong> → All above perks + Exclusive Access to Speaker/Networking Lounge</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-orange-300 mb-3">📋 Terms & Conditions:</h3>
          <div className="text-gray-300 leading-relaxed space-y-2">
            <p>• Perks are awarded only for verified registrations made through your unique referral code.</p>
            <p>• All benefits are non-transferable, and higher tiers include perks from lower tiers.</p>
            <p>• Ambassadors must promote TechFest in an ethical, respectful, and professional manner—any fake registrations, spamming, or misuse of TechFest branding will lead to disqualification.</p>
            <p>• Final decisions rest with the TechFest 2025 Organizing Committee.</p>
          </div>
        </div>
      </div>
    )
  };

  const handleRegisterNow = () => {
    window.open('https://forms.gle/5HsRYsY3LMhumKbo8', '_blank');
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
    const link = document.createElement('a');
    link.href = '/Community%20partnership%20proposal.pdf';
    link.download = 'Community partnership proposal.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSocietyRegistration = () => {
    window.open('https://forms.gle/XvpUd4kSgnoWnzyq6', '_blank');
  };

  const handleAmbassadorshipApply = () => {
    window.open('https://forms.gle/B9DXgPTRkMqhPojD9', '_blank');
  };

  const handleAmbassadorshipDownload = () => {
    setIsAmbassadorshipDownloadModalOpen(true);
  };

  return (
    <div className="min-h-screen px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-gradient-x">
      <Helmet>
        <title>TechFest Pakistan - Agenda</title>
        <meta name="description" content="Check out the TechFest Pakistan agenda for TechFest'25 Peshawar Chapter. View event schedule, venue details, registration information, and sponsorship opportunities for October 11, 2025." />
        <meta name="keywords" content="TechFest, agenda, schedule, event details, venue, registration, sponsorship, Peshawar, Pakistan, technology festival" />
      </Helmet>
      <div className="container mx-auto max-w-4xl">
        {/* Venue Information */}
        <motion.div
          className="bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        {/* Section Divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="px-4 text-cyan-400 font-semibold">• • •</div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

        {/* Registration & Community Section */}
        <motion.div
          className="bg-slate-800/30 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Join TechFest'25</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ButtonWithTooltip
              icon={ExternalLink}
              tooltip="Open registration form"
              onClick={handleRegisterNow}
              variant="primary"
            >
              Register Now
            </ButtonWithTooltip>

            <ButtonWithTooltip
              icon={BookOpen}
              tooltip="View terms and conditions"
              onClick={() => setIsJoinModalOpen(true)}
              variant="secondary"
            >
              Terms & Conditions
            </ButtonWithTooltip>

            <ButtonWithTooltip
              icon={Download}
              tooltip="Download community event schedule"
              onClick={handleCommunityAgendaDownload}
              variant="tertiary"
            >
              Community Agenda
            </ButtonWithTooltip>
          </div>
        </motion.div>

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

        {/* Ambassadorship Program Section */}
        <div className="bg-slate-800/30 backdrop-blur-md border border-orange-500/20 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Ambassadorship Program</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ButtonWithTooltip
              icon={Users}
              tooltip="Opens application form in new tab"
              onClick={handleAmbassadorshipApply}
              variant="primary"
            >
              Apply for Ambassadorship
            </ButtonWithTooltip>

            <ButtonWithTooltip
              icon={BookOpen}
              tooltip="View terms and conditions"
              onClick={() => setIsAmbassadorshipModalOpen(true)}
              variant="secondary"
            >
              Terms & Conditions
            </ButtonWithTooltip>

            <ButtonWithTooltip
              icon={Download}
              tooltip="Check proposal availability"
              onClick={handleAmbassadorshipDownload}
              variant="tertiary"
            >
              Download Proposal
            </ButtonWithTooltip>
          </div>
        </div>

        {/* Modals */}
        <Modal
          isOpen={isJoinModalOpen}
          onClose={() => setIsJoinModalOpen(false)}
          title="Terms & Conditions - Join TechFest'25"
        >
          <p className="text-gray-300 leading-relaxed">{termsContent.join}</p>
        </Modal>

        <Modal
          isOpen={isSponsorshipModalOpen}
          onClose={() => setIsSponsorshipModalOpen(false)}
          title="Terms & Conditions - Sponsorship"
        >
          <p className="text-gray-300 leading-relaxed">{termsContent.sponsorship}</p>
        </Modal>

        <Modal
          isOpen={isSocietyModalOpen}
          onClose={() => setIsSocietyModalOpen(false)}
          title="Terms & Conditions - Society Registration"
        >
          <p className="text-gray-300 leading-relaxed">{termsContent.society}</p>
        </Modal>

        <Modal
          isOpen={isAmbassadorshipModalOpen}
          onClose={() => setIsAmbassadorshipModalOpen(false)}
          title="Terms & Conditions - Ambassadorship Program"
        >
          <p className="text-gray-300 leading-relaxed">{termsContent.ambassadorship}</p>
        </Modal>



        <Modal
          isOpen={isAmbassadorshipDownloadModalOpen}
          onClose={() => setIsAmbassadorshipDownloadModalOpen(false)}
          title="Ambassadorship Proposal"
        >
          <p className="text-gray-300 leading-relaxed">Ambassadorship proposal will be available soon.</p>
        </Modal>
      </div>
    </div>
  );
};

export default Agenda;
