'use client';

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { BrandStory } from '@/components/sections/BrandStory';
import { MenuHighlights } from '@/components/sections/MenuHighlights';
import { Reviews } from '@/components/sections/Reviews';
import { LocationServices } from '@/components/sections/LocationServices';
import { TrustAchievements } from '@/components/sections/TrustAchievements';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <BrandStory />
      <MenuHighlights />
      <Reviews />
      <LocationServices />
      <TrustAchievements />
    </div>
  );
}
