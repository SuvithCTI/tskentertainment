import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsTicker from '../components/home/StatsTicker';
import LiveInstaFeed from '../components/home/LiveInstaFeed';
import Testimonials from '../components/home/Testimonials';

export default function HomePage({ onOpenBookingModal }) {
  return (
    <div>
      <HeroSection onOpenBookingModal={onOpenBookingModal} />
      <StatsTicker />
      <LiveInstaFeed />
      <Testimonials />
    </div>
  );
}
