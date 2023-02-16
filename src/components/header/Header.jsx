import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getBasket } from "../../store/basket/BasketReducer";
import BasketButton from "./BasketButton";

const Header = ({ onShowBasket }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const calculateTotalAmount = useCallback(() => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0);
    return sum;
  }, [items]);
  useEffect(() => {
    setAnimationClass("bump");

    const id = setTimeout(() => {
      setAnimationClass("");

      return () => {
        clearTimeout(id);
      };
    }, 600);
  }, [items]);
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
        onClick={onShowBasket}
        className={animationClass}
        count={calculateTotalAmount()}
      ></BasketButton>
    </Container>
  );
};

export default memo(Header);

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  height: 101px;
  background-color: rgb(138, 43, 6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 120px;
  padding-right: 120px;
`;

const Logo = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  font-family: Poppins, sans-serif;
`;
