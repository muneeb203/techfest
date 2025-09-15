import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // prevent background scroll
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-content"
          onClick={onClose}
        >
          <motion.div
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 max-w-lg max-h-[80vh] overflow-y-auto relative border-2 border-cyan-500 shadow-neon"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 id="modal-title" className="text-white text-xl font-semibold">
                {title}
              </h2>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-gray-400 hover:text-white text-2xl font-bold leading-none transition-colors duration-300"
              >
                &times;
              </button>
            </div>
            <div id="modal-content" className="text-gray-300 text-sm leading-relaxed">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

/* Tailwind custom shadow for neon effect can be added in tailwind.config.js if needed:
shadow-neon: '0 0 8px 2px rgba(6, 182, 212, 0.7), 0 0 20px 4px rgba(6, 182, 212, 0.5)',
*/
