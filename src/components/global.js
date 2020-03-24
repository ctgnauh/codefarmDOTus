import styled from 'styled-components';
import ExternalLink from './common/ExternalLink';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 128px 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 96px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;

export const MozButton = styled(ExternalLink)`
  color: ${props => props.theme.color.white.regular};
  text-decoration: none;

  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0px;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.theme.color.white.regular};
  background-color: ${props => props.theme.color.black.regular};
  ${props => props.theme.font_size.small};

  &:hover {
    color: ${props => props.theme.color.black.regular};
    background-color: ${props => props.theme.color.white.regular};
  }
`;
