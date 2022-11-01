import PropTypes from 'prop-types';
import { Title, SectionWrapper } from './Section.styles';

export const Section = ({ title, children }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    {children}
  </SectionWrapper>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
