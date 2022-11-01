import styled from 'styled-components';

export const Button = styled.button`
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights.body};
  text-transform: capitalize;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  background-color: ${p => p.theme.colors.btnColor};
  padding: 8px;
  :hover {
    background-color: ${p => p.theme.colors.btnAccent};
    color: ${p => p.theme.colors.white};
  }
`;

export const FeedbackList = styled.ul`
  display: inline-flex;
`;

export const FeedbackItem = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
`;
