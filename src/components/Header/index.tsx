import { Wrapper } from "./styles";
import { FaPizzaSlice, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Header = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  const [windowSize, setWindowSize] = useState<{
    innerWidth: number;
  }>(getWindowSize());

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <div className="company-name">
          <div className="logo">
            <FaPizzaSlice
              fill="var(--clr-red)"
              size={windowSize.innerWidth >= 768 ? 65 : 30}
            />
          </div>
          <div className="title">
            <h1>Minha Pizzaria</h1>
          </div>
        </div>
        <div className="cart">
          <FaShoppingCart
            fill="var(--clr-red)"
            size={windowSize.innerWidth >= 768 ? 50 : 30}
          />
          <span>{cart.length}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
