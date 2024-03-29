import { graphql } from 'gatsby';
import React from 'react';
import { HomeQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import { ContactSection } from '../components/sections/ContactSection';
import { HeroSection } from '../components/sections/HeroSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { WhoWeAreSection } from '../components/sections/WhoWeAreSection';
import { mapIntroFromKontent } from '../models/intro';
import { mapFromKontent } from '../models/partners';

type HomeProps = {
  readonly data: HomeQuery;
}

const Home: React.FC<HomeProps> = ({ data }) => (
  <Layout>
    <HeroSection intro={mapIntroFromKontent(data)} />
    <WhoWeAreSection />
    <ContactSection />
    <PartnersSection partners={mapFromKontent(data)} />
  </Layout>
);

export default Home;

export const query = graphql`
    query Home {
        allKontentItemHomepage(filter: {system: {codename: {eq: "homepage"}}}) {
            nodes {
                elements {
                    content {
                        value {
                            ... on kontent_item_intro {
                                system { id }
                                elements {
                                    title { value }
                                    subtitle { value }
                                    cta { value }
                                    image {
                                        value {
                                            url
                                            width
                                            height
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        allKontentItemPartneri(filter: {system: {codename: {eq: "partneri"}}}) {
            nodes {
                elements {
                    partners {
                        name
                        type
                        value {
                            ... on kontent_item_partner {
                                system {
                                    id
                                }
                                elements {
                                    title {
                                        value
                                    }
                                    logo {
                                        value {
                                            name
                                            type
                                            size
                                            url
                                            width
                                            height
                                        }
                                    }
                                    link {
                                        value
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
