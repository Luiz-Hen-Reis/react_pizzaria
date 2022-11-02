import { useState } from "react";
import { CartItem } from "../../types/CartItem";
import { Pizza } from "../../types/Pizza";
import { Wrapper } from "./styles";
import Modal from "../Modal";

interface Props {
  pizza: Pizza;
}

const PizzaItem = ({ pizza }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  

  const { image, flavor, description, priceNormal } = pizza;


  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Wrapper onClick={() => setOpenModal(true)}>
        <div className="pizza-image">
          <img src={image} alt={flavor} />
        </div>
        <div className="pizza-info">
          <h3>{flavor}</h3>
          <p>
            {description.length > 45
              ? `${description.substring(0, 45)} ....`
              : description}
          </p>
          <h5>A partir de R${priceNormal}</h5>
        </div>
      </Wrapper>
      <Modal
        modalState={openModal}
        pizza={pizza}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default PizzaItem;
