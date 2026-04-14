import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  type: 'doctors' | 'clinics' | 'hospitals' | null;
}

const ProviderDetailsModal: React.FC<Props> = ({ isOpen, onClose, type }) => {
  if (!type) return null;

  const content = {
    doctors: {
      title: "Ayura for Independent Doctors",
      desc: "Comprehensive suite for independent practitioners to build a robust digital practice with zero overhead.",
      features: [
        "ABDM Compliant Electronic Health Records (EHR)",
        "E-Prescription generator with standard AI-checked drug database",
        "Automated patient appointment scheduling & WhatsApp reminders",
        "Instant consultation toggle for real-time earnings during free hours",
        "AI-Powered clinical assistant to transcribe and summarize voice notes"
      ]
    },
    clinics: {
      title: "Ayura for Clinics",
      desc: "Complete clinic management software geared for managing multiple doctors, staff, and physical queues.",
      features: [
        "Reception & Queuing Management System with wait-time tracking",
        "Multi-doctor calendar and staff roster scheduling",
        "Inventory management for on-site pharmacy stocks",
        "Expense, shift, and integrated billing tracking",
        "Patient communication broadcast system for updates and camps"
      ]
    },
    hospitals: {
      title: "Ayura for Hospitals",
      desc: "Enterprise-grade Hospital Information System (HIS) featuring advanced administrative analytics and multi-department flow.",
      features: [
        "Complete In-Patient Department (IPD) workflow management",
        "Real-time bed layout, occupancy tracking, and discharge routing",
        "Integrated LIMS (Logistics & Lab) and Pharmacy Billing System",
        "Advanced modular BI dashboards for hospital administrators",
        "Multi-branch enterprise reporting and compliance logging"
      ]
    }
  };

  const details = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white rounded-[32px] p-8 md:p-12 z-[60] shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <button onClick={onClose} className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
              <X className="w-6 h-6 text-gray-500" />
            </button>
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Detailed Overview</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">{details.title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{details.desc}</p>
            
            <h4 className="text-xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-2">Included Systems & Modules</h4>
            <ul className="space-y-4">
              {details.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-gray-800 font-medium leading-tight mt-2">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                <button onClick={onClose} className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-10 rounded-2xl transition-colors shadow-lg shadow-primary-500/20">
                    Got It
                </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProviderDetailsModal;
