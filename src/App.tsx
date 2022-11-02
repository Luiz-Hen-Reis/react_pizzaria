import { useState } from "react";
import { useSelector } from "react-redux";
import { CartSideDisplay, PizzaArea, PizzaMenu, Wrapper } from "./App.styles";
import { CartSideMenu, Header, PizzaItem } from "./components";
import { pizzas } from "./data/Pizzas";
import { RootState } from "./redux/store";

const App = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <Wrapper>
      <div>
        <Header />
        <PizzaArea>
          <h1>Pizzas</h1>
          <PizzaMenu>
            {pizzas.map((pizza, index) => (
              <PizzaItem pizza={pizza} key={index} />
            ))}
          </PizzaMenu>
        </PizzaArea>
      </div>
      {cart.length > 0 &&  (
        <CartSideDisplay>
          <CartSideMenu cartItems={cart} />
        </CartSideDisplay>
      )}
    </Wrapper>
  );
};

export default App;
