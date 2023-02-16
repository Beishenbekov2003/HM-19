import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const BasketItem = ({ title, price, amount, incrementAmount, dec }) => {
  return (
    <Container>
      <StyledTilte>{title}</StyledTilte>
      <Content>
        <PriceAndAmountContainer>
          <StyledPrice>${price}</StyledPrice>
          <AmountStyle>x{amount}</AmountStyle>
        </PriceAndAmountContainer>
        <CounterContainer>
          <Button style={{ width: "70px" }} onClick={dec} variant="outlined">
            -
          </Button>
          <Button
            style={{ width: "70px" }}
            onClick={incrementAmount}
            variant="outlined"
          >
            +
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  );
};

export default BasketItem;

const StyledTilte = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0 0 12px;
`;

const Container = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid black;
  width: 100%;
  margin-bottom: 30px;
`;

const StyledPrice = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  color: #ad5502;
`;
const AmountStyle = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  padding: 6px 14px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: block;

  color: #222222;
  margin: 0;
`;

const PriceAndAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 153px;
  margin: 0;
`;
const CounterContainer = styled.div`
  > button {
    margin-right: 14px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
