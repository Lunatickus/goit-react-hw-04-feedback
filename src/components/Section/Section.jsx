import { StyledFeedbackSection, StyledSectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledFeedbackSection>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      {children}
    </StyledFeedbackSection>
  );
};
