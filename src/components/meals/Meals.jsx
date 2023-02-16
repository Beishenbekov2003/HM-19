import { memo } from "react";
import styled from "styled-components";
import MealItem from "./meal-item/MealItem";

const Meals = ({ meals, isLoading, error }) => {
  return (
    <Card>
      <ul>
        {isLoading && <p>Loading.........</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {meals.map((meal) => {
          return (
            <MealItem
              title={meal.title}
              price={meal.price}
              description={meal.description}
              id={meal._id}
              key={meal._id}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default memo(Meals);

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 75%;
  margin: 230px auto;
  padding: 40px 40px 16px 40px;
`;
