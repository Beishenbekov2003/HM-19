import { useCallback, useState } from "react";
import "./App.css";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { Provider } from "react-redux";
import { store } from "./store";
import { useFoods } from "./hooks/useFoods";
import styled from "styled-components";
function AppContent() {
  const [isBasketVisible, setBasketVisible] = useState(false);

  const { sortDirection, changesetSortDirection, meals, isLoading, error } =
    useFoods();
  const showBasketHnadler = useCallback(() => {
    setBasketVisible((prevState) => !prevState);
  }, []);
  return (
    <Provider store={store}>
      <Header onShowBasket={showBasketHnadler} />

      <Summary />
      <Content>
        <select
          onChange={(e) => changesetSortDirection(e.target.value)}
          value={sortDirection}
        >
          <option value="ASC">cheaper</option>
          <option value="DESC">more expensive</option>
        </select>
      </Content>
      <Meals meals={meals} isLoading={isLoading} error={error} />
      {isBasketVisible && <Basket onClose={showBasketHnadler} />}
    </Provider>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
const Content = styled.div`
  padding: 20px 10px;
  border: none;
  margin-top: 180px;
  display: flex;
  margin-left: 200px;
  justify-content: center;
  position: absolute;
`;
