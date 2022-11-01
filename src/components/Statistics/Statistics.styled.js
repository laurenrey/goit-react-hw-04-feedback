import styled from 'styled-components';

export const Item = styled.li`
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights.body};
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
