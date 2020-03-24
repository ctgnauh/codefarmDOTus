import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/orgs/0xDEATHCODE',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/codefarm_official',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "landscape" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
  `}
  render={data => (
    <React.Fragment>
      <Art>
        <Img
          fluid={data.art_pot.childImageSharp.fluid}
          style={{ width: 960, maxWidth: '100%', marginBottom: -7 }}
        />
      </Art>
      <FooterWrapper>
        <StyledContainer>
          <Copyright>
            <span>
              Messrs.
              <br />
              <ExternalLink href="https://twitter.com/0xinmu">
                YAXIN
              </ExternalLink>
              {`, `}
              <ExternalLink href="https://twitter.com/ctgnauh">
                HUANGTC
              </ExternalLink>
              {` & `}
              <ExternalLink href="https://twitter.com/numbchild">
                STARDIVINER 
              </ExternalLink>
              <br />
              are proud to present
            </span>
            <h3>Codefarm</h3>
          </Copyright>
          <SocialIcons>
            {SOCIAL.map(({ icon, link }) => (
              <ExternalLink key={link} href={link}>
                <img src={icon} alt="link" />
              </ExternalLink>
            ))}
          </SocialIcons>
        </StyledContainer>
      </FooterWrapper>
    </React.Fragment>
  )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.gray.regular};

  a {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    margin-top: 24px;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 20px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
