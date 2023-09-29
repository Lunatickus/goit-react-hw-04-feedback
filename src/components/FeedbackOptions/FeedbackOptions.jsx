import { FeedbackButton } from './FeedbackButton';
import { StyledButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledButtonList>
      {options.map(button => (
        <FeedbackButton
          children={button}
          onLeaveFeedback={onLeaveFeedback}
          key={button}
        />
      ))}
    </StyledButtonList>
  );
};

