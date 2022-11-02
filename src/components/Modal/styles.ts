import styled from "styled-components";

export const Wrapper = styled.div<{ modalState: boolean }>`
  display: ${(props) => (props.modalState ? "flex" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
    align-items: center;
    justify-content: center;

  .modal-container {
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 15px #999;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 30px;
      width: 900px;
    }

    .close-btn {
      position: absolute;
      right: 15px;
      top: 15px;
      cursor: pointer;
    }

    .image-container {
      justify-content: center;
      align-items: center;
      margin: 20px;
      display: block;

      img {
        width: 420px;
        height: 420px;
      }
    }

    .modal-area {
      margin: 0px 20px;

      @media screen and (min-width: 768px) {
        width: 400px;
      }

      h2 {
        margin: 20px 0px;
      }

      p {
        color: var(--clr-description);
      }

      .prices {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
      }

      .quantity-area {
        margin: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }

      form {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 0;

        input[type="checkbox"] {
          width: 45px;
          height: 15px;
          background: #555;
          border-radius: 5px;
        }
      }

      .addToCart-btn {
        text-align: center;
        padding: 10px;
        margin: 30px 10px;
        background-color: var(--clr-red);
        color: var(--clr-alabaster);
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const PizzaSizeField = styled.div<{ selected: boolean }>`
  padding: 10px;
  margin: 10px;
  color: ${props => props.selected ? '#fff' : '#000'};
  background-color: ${props => props.selected ? '#00f' : 'var(--clr-description)'};
  border-radius: 5px;
  cursor: pointer;
`;
