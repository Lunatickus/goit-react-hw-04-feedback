import { StyledButton } from './FeedbackButton.styled';

export const FeedbackButton = ({ children, onLeaveFeedback }) => {
  return (
    <li>
      <StyledButton type="button" onClick={onLeaveFeedback}>
        {children}
      </StyledButton>
    </li>
  );
};
