import React from 'react';
import ServicesSection from '../components/services/ServicesSection';
import CostCalculator from '../components/home/CostCalculator';

export default function ServicesPage({ onOpenBookingModal }) {
  return (
    <div>
      <ServicesSection onOpenBookingModal={onOpenBookingModal} />
      <CostCalculator />
    </div>
  );
}
