import { CartItem } from "../../types/CartItem";
import { Wrapper } from "./styles";
import { IoTrash } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { CLEAN_CART, REMOVE_FROM_CART } from "../../redux/reducers/cartSlice";

interface Props {
  cartItems: CartItem[];
}

const CartSideMenu = ({ cartItems }: Props) => {
  const dispatch = useDispatch();
  let totalPrice = 0;

  for(let i in cartItems) {
    totalPrice += (cartItems[i].catupiryBorder ? cartItems[i].price + 6 : cartItems[i].price) * cartItems[i].quantity;
  }

  const handleMakeOrder = () => {
    alert('Recebemos seu pedido! Agradecemos a preferência! :)');

    dispatch(CLEAN_CART());
  }

  return (
    <Wrapper>
      <div className="title">Minha Sacola</div>
      <hr />
      <div className="cartItems-area">
        {cartItems.map((cartItem, index) => {
          const {
            image,
            pizzaFlavor,
            price,
            pizzaSize,
            quantity,
            catupiryBorder,
          } = cartItem;

          return (
            <div className="cartItem-container" key={index}>
              <div className="pizza-image">
                <img src={image} alt={pizzaFlavor} />
              </div>
              <div className="pizza-info">
                <div>{pizzaFlavor}</div>
                <div>R${price}</div>
                <div>{pizzaSize === "large" ? "Grande" : "Normal"}</div>
                {!catupiryBorder && <div>Sem borda de catupiry</div>}
                {catupiryBorder && <div>Com borda de catupiry</div>}
              </div>
              <div>
                <div
                  className="removeItem-btn"
                  onClick={() => dispatch(REMOVE_FROM_CART({ cartItem }))}
                >
                  <IoTrash fill="#fff" size={25} />
                </div>
                <div>{quantity >= 10 ? quantity : `0${quantity}`}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total-area">
        <div>Total: R${totalPrice.toFixed(2)}</div>
      </div>
      <div className="buttons-area">
      <div className="clean-btn" onClick={() => dispatch(CLEAN_CART())}>Esvaziar Sacola</div>
      <div className="order-btn" onClick={handleMakeOrder}>Fazer pedido</div>
      <div></div>
      </div>
    </Wrapper>
  );
};

export default CartSideMenu;
