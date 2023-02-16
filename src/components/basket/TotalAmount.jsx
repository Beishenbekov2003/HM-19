import React, { memo, useMemo } from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const TotalAmount = ({ price, onClose, onOrder }) => {
  const orderButton =
    price > 0 ? (
      <Button variant="contained" onClick={onOrder}>
        Order
      </Button>
    ) : null;
  const fixedPrice = useMemo(() => price.toFixed(2), [price]);
  return (
    <div>
      <StyledTiltleContainer>
        <StyledTitle>Total Amount</StyledTitle>
        <StyledPrice>${fixedPrice}</StyledPrice>
      </StyledTiltleContainer>
      <ActionButtonsContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {orderButton}
      </ActionButtonsContainer>
    </div>
  );
};

export default memo(TotalAmount);

const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  text-align: center;

  color: #222222;
`;
const StyledPrice = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;

  color: #8a2b06;
`;
const StyledTiltleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;
const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 1rem;
`;
