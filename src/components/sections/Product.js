import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container, MozButton } from '@components/global';

import { ReactComponent as SettingIcon } from '@static/icons/settings.svg';
import { ReactComponent as HeadsetIcon } from '@static/icons/headphones.svg';
import { ReactComponent as EditorIcon } from '@static/icons/edit.svg';

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_develop: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "analytics" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="product" accent>
        <Container>
          <TextCenter>
            <h1>也是您的私人技术顾问</h1>
            <br />
            <p>
              <MozButton href="https://stardiviner.taobao.com/">
                了解更多 &nbsp;&#x2794;
              </MozButton>
            </p>
          </TextCenter>
          <Grid>
            <Text>
              <Icon>
                {EditorIcon()}
              </Icon>
              <h3>
                应用配置
              </h3>
              <p>
                Codefarm 团队有着十年以上的开源软件使用经验。您现在遇到的问题，可能是我们曾经踩过的坑。您的需求，也许是我们日常使用的功能。
              </p>
            </Text>
            <Text>
              <Icon>
                {SettingIcon()}
              </Icon>
              <h3>
                系统维护
              </h3>
              <p>
                专人指导，为常见的 GNU/Linux 发行版提供安装、修复、备份服务。帮助初学者迈出第一步，拯救您的系统于水火。
              </p>
            </Text>
            <Text>
              <Icon>
                {HeadsetIcon()}
              </Icon>
              <h3>
                问题咨询 <Highlight>免费</Highlight>
              </h3>
              <p>
                我们会倾听您的疑问，以多年的经验，从专业的角度，为您提供可靠的解决方案。从而帮助您轻松应对困难。
              </p>
            </Text>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Icon = styled.div`
  margin-bottom: 16px;
  svg {
    width: 32px;
    height: 32px;
  }
`;

const Text = styled.div`
  color: ${props => props.theme.color.gray.regular};
  p {
    color: ${props => props.theme.color.gray.regular};
  }
`;

const Highlight = styled.span`
  background-color: ${props => props.theme.color.white.regular};
  color: ${props => props.theme.color.black.regular};
  font-size: 12px;
  padding: 2px;
  border-width: 2px;
  border-radius: 5px;
  line-height: 16px;
`;

const TextCenter = styled(Text)`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;
  
  h3 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`;

export default UsedBy;
