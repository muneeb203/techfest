import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonWithTooltipProps {
  icon: LucideIcon;
  tooltip: string;
  onClick: () => void;
  variant: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  className?: string;
}

const ButtonWithTooltip: React.FC<ButtonWithTooltipProps> = ({
  icon: Icon,
  tooltip,
  onClick,
  variant,
  children,
  className = '',
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const baseClasses = 'flex items-center justify-center space-x-3 py-4 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:shadow-lg hover:shadow-blue-500/25 focus:ring-blue-500',
    secondary: 'border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/25 focus:ring-purple-500',
    tertiary: 'border border-green-500/50 text-green-400 hover:bg-green-500/10 backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/25 focus:ring-green-500',
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={onClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        tabIndex={0}
      >
        <Icon className="w-5 h-5" />
        <span>{children}</span>
      </motion.button>
      {showTooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white text-sm px-3 py-1 rounded-md shadow-lg z-10 whitespace-nowrap">
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-700"></div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithTooltip;
