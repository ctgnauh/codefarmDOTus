import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pro: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "programming" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_computer: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "computer" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_dev: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "developer" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>专业团队，互联网从业者为您提供服务</h2>
              <p>
                Codefarm 汇集了来自五湖四海的互联网从业者。我们使用成熟的技术，通过远程协作的方式，以职业的态度为您提供最专业的服务。
              </p>
            </div>
            <Art>
              <Img fluid={data.art_pro.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_computer.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>一站式服务，无需关心背后的技术细节</h2>
              <p>
                我们会为您的需求提供完整的解决方案，从代码到产品，从开发到运维。而您可以把更多的精力放在产品上，而不是复杂难懂的代码与难以维护的服务器。
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>全年无休，随时提供一对一的售后服务</h2>
              <p>
                无论是工作日还是节假日，我们都有专人为您提供远程售后服务。并且根据您所遇到的情况，使用最高效的方式解决问题。
              </p>
            </div>
            <Art>
              <Img fluid={data.art_dev.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: left;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
