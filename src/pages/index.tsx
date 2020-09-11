import React from 'react';
import Layout from '../components/Layout';
import { HeroSection } from '../components/sections/HeroSection';
import { WhoWeAreSection } from '../components/sections/WhoWeAreSection';

const Home: React.FC = () => (
  <Layout>
    <HeroSection />
    <WhoWeAreSection />
  </Layout>
);

export default Home;
