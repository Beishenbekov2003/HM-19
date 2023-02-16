import { memo } from "react";
import styled from "styled-components";

const SummaryInfocard = () => {
  return (
    <Card>
      <StyledTitle>Delicious Food, Delivered To You</StyledTitle>
      <StyledText>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </StyledText>
      <StyledText>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </StyledText>
    </Card>
  );
};

export default memo(SummaryInfocard);

const Card = styled.div`
  max-width: 53.375rem;
  background-color: #383838;
  padding: 36px 54px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  position: relative;
  border-radius: 16px;
  margin: -12rem auto;
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
`;
const StyledText = styled.p`
  margin-top: 28px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
