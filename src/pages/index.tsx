import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { FluidObject } from 'gatsby-image/index';
import React from 'react';
import { HeroImageQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import { PRODUCTS_URL } from '../constants/urls';

type HomeProps = {
  readonly data: HeroImageQuery;
};

const Home: React.FC<HomeProps> = ({ data }) => (
  <Layout>
    {/*<div>*/}
    {/*  <p>*/}
    {/*    Go and check out our <Link to={PRODUCTS_URL}>products</Link>!*/}
    {/*  </p>*/}
    {/*</div>*/}
    <Img fluid={data.file!.childImageSharp!.fluid! as FluidObject} />
  </Layout>
);

export default Home;


export const query = graphql`
    query HeroImage {
        file(relativePath: { eq: "hero.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1920) {
                    aspectRatio
                    src
                    srcSet
                    sizes
                    base64
                }
            }
        }
    }
`;
