import React from 'react';
import AboutSection from '../components/about/AboutSection';
import StatsTicker from '../components/home/StatsTicker';

export default function AboutPage({ onOpenBookingModal }) {
  return (
    <div>
      <AboutSection onOpenBookingModal={onOpenBookingModal} />
      <StatsTicker />
    </div>
  );
}
