import { useCallback, useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = ({ onClose }) => {
  const { items } = useContext(BasketContext);
  const { updateBasketItem, deleteBasketItem } = useContext(BasketContext);
  
  const dec = useCallback(
    (id, amount) => {
      if (amount > 1) {
        updateBasketItem({ amount: amount - 1, id: id });
      } else {
        deleteBasketItem(id);
      }
    },
    [updateBasketItem,deleteBasketItem]
  );


  const incrementAmount = useCallback(
    (id, amount) => {
      updateBasketItem({ amount: amount + 1, id: id });
    },
    [updateBasketItem]
  );


  const getTotalPrice = useCallback(() => {
    return items.reduce((sum, { price, amount }) => (sum += price * amount), 0);
  }, [items]);
  return (
    <Modal onClose={onClose}>
      <StyledTotalContainer>
        <FiwedHeightContainer>
          {items.map((item) => {
            return (
              <BasketItem
                key={item._id}
                incrementAmount={() => incrementAmount(item._id, item.amount)}
                dec={() => dec(item._id, item.amount)}
                title={item.title}
                price={item.price}
                amount={item.amount}
              />
            );
          })}
        </FiwedHeightContainer>

        <TotalAmount
          price={getTotalPrice()}
          onClose={onClose}
          onOrder={() => {}}
        />
      </StyledTotalContainer>
    </Modal>
  );
};

export default Basket;

const StyledTotalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;
const FiwedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
