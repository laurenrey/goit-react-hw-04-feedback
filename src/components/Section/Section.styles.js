import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 32px;
  font-weight: ${p => p.theme.fontWeights.heading};
  margin-bottom: 20px;
`;

export const SectionWrapper = styled.section`
  padding-top: 20px;
  background-color: ${p => p.theme.colors.background};
  :not(:first-child) {
    padding-bottom: 20px;
  }
`;
