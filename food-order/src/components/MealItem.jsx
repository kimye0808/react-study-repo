import Button from "./UI/Button";
import { currencyFormatter } from "../util/formatting";
import { useContext } from "react";
import CartContext from "../store/CartContext";

//음식 하나 하나의 컴포넌트
export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
      <div>
        <h3>{meal.name}</h3>
        <p className="meal-item-price">
          {currencyFormatter.format(meal.price)}
        </p>
        <p className="meal-item-description">{meal.description}</p>
      </div>
      <p className="meal-item-actions">
        <Button onClick={handleAddMealToCart}>Add to Cart</Button>
      </p>
    </li>
  );
}
