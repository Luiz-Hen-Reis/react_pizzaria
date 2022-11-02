import { useState } from "react";
import { Pizza } from "../../types/Pizza";
import { PizzaSizeField, Wrapper } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { CartItem } from "../../types/CartItem";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../redux/reducers/cartSlice";

interface Props {
  modalState: boolean;
  pizza: Pizza;
  handleCloseModal: () => void;
}

const Modal = ({ modalState, pizza, handleCloseModal }: Props) => {
  const [normalSizeSelected, setNormalSizeSelected] = useState<boolean>(true);
  const [largeSizeSelected, setLargeSizeSelected] = useState<boolean>(false);
  const [pizzaQuantity, setPizzaQuantity] = useState<number>(1);
  const [chosenPizza, setChosenPizza] = useState<CartItem | {}>({
    image: pizza.image,
    pizzaFlavor: pizza.flavor,
    quantity: 1,
    catupiryBorder: false,
    price: pizza.priceNormal,
  });

  const dispatch = useDispatch();
  const { image, flavor, description, priceNormal, priceLarge } = pizza;

  const handleSelectPizzaSize = (price: number) => {
    if (price === priceNormal) {
      setChosenPizza({
        ...chosenPizza,
        pizzaSize: "normal",
        price: priceNormal,
      });
      setNormalSizeSelected(true);
      setLargeSizeSelected(false);
      return;
    }
    if (price === priceLarge) {
      setChosenPizza({ ...chosenPizza, pizzaSize: "large", price: priceLarge });
      setNormalSizeSelected(false);
      setLargeSizeSelected(true);
      return;
    }
  };

  const handlePizzaQuantity = (action: string) => {
    if (action === "increase") setPizzaQuantity(pizzaQuantity + 1);
    if (action === "decrease" && pizzaQuantity > 1)
      setPizzaQuantity(pizzaQuantity - 1);

    setChosenPizza({ ...chosenPizza, quantity: pizzaQuantity + 1 });
  };

  const handleCatupiryBorderOption = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked)
      setChosenPizza({ ...chosenPizza, catupiryBorder: true });
    else setChosenPizza({ ...chosenPizza, catupiryBorder: false });
  };

  const handleAddToCart = () => {
    dispatch(ADD_TO_CART(chosenPizza));
    handleCloseModal();
  };

  return (
    <Wrapper modalState={modalState}>
      <div className="modal-container">
        <div className="close-btn" onClick={handleCloseModal}>
          <AiOutlineClose fill="#f00" size={35} />
        </div>
        <div className="image-container">
          <img src={image} alt={flavor} />
        </div>
        <div className="modal-area">
          <h2>{flavor}</h2>
          <p>{description}</p>
          <hr />
          <div className="prices">
            <PizzaSizeField
              selected={normalSizeSelected}
              onClick={() => handleSelectPizzaSize(priceNormal)}
            >
              Tamanho Normal - R${priceNormal.toFixed(2)}
            </PizzaSizeField>
            <PizzaSizeField
              selected={largeSizeSelected}
              onClick={() => handleSelectPizzaSize(priceLarge)}
            >
              Tamanho Grande - R${priceLarge.toFixed(2)}
            </PizzaSizeField>
          </div>
          <div className="quantity-area">
            <div>Quantidade</div>
            <button onClick={() => handlePizzaQuantity("decrease")}>-</button>
            <div>{pizzaQuantity}</div>
            <button onClick={() => handlePizzaQuantity("increase")}>+</button>
          </div>
          <form>
            <input
              type="checkbox"
              name="catupiry-border"
              value="Borda com Catupiry"
              defaultChecked={false}
              onChange={handleCatupiryBorderOption}
            />
            <label htmlFor="catupiry-border">
              Borda com Catupiry? - R$06.00
            </label>
          </form>
          <div className="addToCart-btn" onClick={handleAddToCart}>
            Adicionar ao carrinho
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
