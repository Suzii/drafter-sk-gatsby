import React from 'react';
import Layout from '../components/Layout';
import { ContactSection } from '../components/sections/ContactSection';
import { HeroSection } from '../components/sections/HeroSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { WhoWeAreSection } from '../components/sections/WhoWeAreSection';

const Home: React.FC = () => (
  <Layout>
    <HeroSection />
    <WhoWeAreSection />
    <ContactSection />
    <PartnersSection />
  </Layout>
);

export default Home;
