import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const COMMENTS = [
  {
    name: '海***9',
    text: '十分满意，客服一步一步教着来的，客服不厌其烦，极力推荐！',
    image: 'josh.jpg',
  },
  {
    name: 't***0（匿名）',
    text: '店主比较耐心，也会回答我的问题，配置好后顺便会把常用插件装全了！',
    image: 'ashlyn.jpg',
  },
  {
    name: 'x***6（匿名）',
    text: '非常感谢帮我配置好了debug，好评！',
    image: 'todd.jpg',
  },
  {
    name: 'c***2',
    text: '店主非常专业，技术十分过关！ 必须好评！',
    image: 'martin.jpg',
  },
  {
    name: 'l***7（匿名）',
    text: '卖家人超好，超耐心。在安装的过程中出现了好多错误，全都解决了。还给我普及了好多计算机知识，最大的收获不是成功安装了系统，是遇到了对的人🤓么么哒～',
    image: 'rose.jpg',
  },
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "kbd" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="comments" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>评价</h1>
          <CommentFlex>
            {COMMENTS.map(({ name, text, image }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <CommentWrapper>
                  <Avatar fluid={img.childImageSharp.fluid} alt={name} />
                  <CommentBox>
                    <Comment key={name}>{text}</Comment>
                    <Author>{name}</Author>
                  </CommentBox>
                </CommentWrapper>
              );
            })}
          </CommentFlex>
          <Art>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
);

const Comment = styled.p`
  color: ${props => props.theme.color.black.regular};
  background-color: #fdfdfd;
  max-width: 640px;

  ::before {
    content: "";
    display: block;
    height: 14px;
    width: 14px;
    border: 1px solid #d8d8d8;
    border-top-color: transparent;
    border-right-color: transparent;
    transform: rotate(45deg);
    position: relative;
    left: -24px;
    top: 24px;
    z-index: 2;
    background-color: #fdfdfd;
  }

  border: 1px solid #d8d8d8;
  padding: 0px 15px 15px 15px;
  margin: 10px;
`;

const Avatar = styled(Img)`
  width: 64px;
  height: 64px;
  padding: 15px;
  margin: 10px;
`;

const CommentWrapper = styled.div`
  display grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const CommentBox = styled.div`
  display: block;
`;

const CommentFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    flex-flow: column nowrap;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
  }
`;

const Author = styled.footer`
  color: ${props => props.theme.color.black.light};
  font-size: 20px;
  margin-left: 14px;
`;

const Art = styled.figure`
  width: 960px;
  margin: 80px 0;
  position: absolute;
  top: 0;
  left: 60%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -100%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

export default Team;
