import React from 'react';
import PostTop from '../../../components/PostTop';
import Fade from 'react-reveal/Fade';
import FooterLink from '../../../components/FooterLink';
import styled from 'styled-components';

const StyledBlockquote = styled.blockquote`
  border-left: 6px solid #878FDD;
  padding-left: 1rem;
`;

const StyledBlockquoteTitle = styled.p`
  font-family: 'SFProDisplay-Regular';
  color: #2b2b2b;
  margin-bottom: 0px;
  @media (max-width: 575.98px) {
    font-size: 20px;
  }
  @media (min-width: 576px) {
    font-size: 22px;
  }
`;

const Career = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <PostTop subtitle="Career Aspirations" title="Plans for the Future" />
      <hr className="my-3" />
      <Fade big>
        <p className="general-font">
          For the future, I plan to complete my kinesiology degree with a{' '}
          <a
            className="hvr-underline blue"
            href="https://cs.uwaterloo.ca/current/programs/require/2019-2020/comptech_option.html"
            target="_blank"
          >
            computing option
          </a>{' '}
          in order to expand my understanding of theory and core concepts such
          as data structures, algorithms, recursion, and more. By self-teaching
          code, many of these fundamentals can be missed out on or only lightly
          touched upon. Taking computer science courses will be beneficial to my
          overall understanding of the field and success whether it be during
          interview questions or simply working on side projects.
        </p>
        <StyledBlockquote>
          <StyledBlockquoteTitle>
            I think the biggest innovations of the 21st century will be at the
            intersection of biology and technology. A new era is beginning.
          </StyledBlockquoteTitle>
          <footer className="general-font"> - Steve Jobs</footer>
        </StyledBlockquote>
        <p className="general-font">
          By studying Kinesiology I will acquire a profound understanding of
          physiological, biomechanical, and psychological dynamic principles and
          mechanisms of movement allowing me to innovate practical technology
          for the fitness and health industry.
        </p>
      </Fade>
      <FooterLink
        path="/about/story"
        title="Up Next"
        subtitle="How I Started Coding"
      />
    </div>
  );
};

export default Career;
