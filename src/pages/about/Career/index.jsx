import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import PostTop from '../../../components/PostTop';
import FooterLink from '../../../components/FooterLink';
import HyperLink from '../../../components/HyperLink';

const StyledBlockquote = styled.blockquote`
  border-left: 6px solid #878fdd;
  padding-left: 1rem;
`;

const StyledBlockquoteTitle = styled.p`
  font-size: 22px;
`;

const Career = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <PostTop subtitle="Career Aspirations" title="Plans for the Future" />
      <hr className="my-3" />
      <Fade big>
        <p>
          For the future, I plan to complete my Kinesiology degree with a{' '}
          <HyperLink
            link="https://uwaterloo.ca/computer-science/sites/ca.computer-science/files/uploads/files/2020-2021_computing_minor_0.pdf"
            text="Computer Science minor"
          />{' '}
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
          <p> - Steve Jobs</p>
        </StyledBlockquote>
        <p>
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
