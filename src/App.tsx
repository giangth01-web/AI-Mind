/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Deployment from './components/Deployment';
import SuccessStories from './components/SuccessStories';
import Experts from './components/Experts';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Deployment />
        <SuccessStories />
        <Experts />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
