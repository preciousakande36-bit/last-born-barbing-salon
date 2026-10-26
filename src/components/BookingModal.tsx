import React, { useState, useEffect } from 'react';
import { SALON_DATA, ServiceItem, buildWhatsAppLink } from '../data/salonData';
import { X, Calendar, Clock, User, Phone, MessageSquare, Scissors, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState<string>(
    preselectedService ? preselectedService.name : SALON_DATA.services[0].name
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService.name);
    }
  }, [preselectedService]);

  useEffect(() => {
    // Default date to today's date in YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = buildWhatsAppLink(selectedService, name.trim(), date, time, notes.trim());
    window.open(link, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const timeSlots = [
    '08:30 AM',
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
    '08:30 PM',
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#141414] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white">
                Book an Appointment
              </h3>
              <p className="text-xs text-neutral-400">
                Instantly pre-fills your appointment in WhatsApp
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Customer Name */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Your Full Name <span className="text-[#D4AF37]">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Tunde Adeleke"
                className="w-full bg-[#0B0B0B] border border-neutral-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none transition-colors"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Phone Number (Optional)
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0801 234 5678"
                className="w-full bg-[#0B0B0B] border border-neutral-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none transition-colors font-mono tabular-nums"
              />
            </div>
          </div>

          {/* Service Selector */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Preferred Service <span className="text-[#D4AF37]">*</span>
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-[#0B0B0B] border border-neutral-700 focus:border-[#D4AF37] text-white rounded-xl py-2.5 px-3.5 text-sm outline-none transition-colors cursor-pointer"
            >
              {SALON_DATA.services.map((srv) => (
                <option key={srv.id} value={srv.name} className="bg-[#141414] text-white">
                  {srv.name} ({srv.price})
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Preferred Date <span className="text-[#D4AF37]">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#0B0B0B] border border-neutral-700 focus:border-[#D4AF37] text-white rounded-xl py-2.5 pl-10 pr-3.5 text-sm outline-none transition-colors"
                />
              </div>
            </div>

            {/* Time Slot Picker */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Preferred Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#0B0B0B] border border-neutral-700 focus:border-[#D4AF37] text-white rounded-xl py-2.5 pl-10 pr-3.5 text-sm outline-none transition-colors cursor-pointer"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-[#141414] text-white">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Special Request or Notes */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Special Request or Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Skin fade with razor sharp hairline, sensitive scalp, etc."
              className="w-full bg-[#0B0B0B] border border-neutral-700 focus:border-[#D4AF37] text-white rounded-xl py-2 px-3.5 text-sm outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full min-h-[48px] py-3 px-6 bg-gradient-to-r from-[#D4AF37] to-[#F3C64F] hover:from-[#F3C64F] hover:to-[#D4AF37] text-black font-semibold text-sm rounded-xl transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Booking to WhatsApp</span>
            </button>
            <p className="text-[11px] text-neutral-400 text-center mt-2.5">
              This opens your WhatsApp with the reservation details ready to send.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
