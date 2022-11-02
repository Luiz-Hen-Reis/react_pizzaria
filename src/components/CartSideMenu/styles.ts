import styled from "styled-components";

export const Wrapper = styled.div`
  .title {
    margin: 2.7rem auto 0 2.7rem;
    font-size: 24px;
  }

  .pizza-image {
    margin: 5px 10px;

    img {
      width: 60px;
      height: 60px;
    }
  }

  .cartItem-container {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #999;
  }

  .pizza-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.8rem;
    flex: 1;
  }

  .removeItem-btn {
    cursor: pointer;
  }

  .buttons-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .clean-btn {
    margin: 1rem auto;
    font-size: 1rem;
    padding: 5px;
    background-color: #fff;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
  
  .total-area {
    margin-top: 1.5rem;
  }

  .order-btn {
    font-size: 1.2rem;
    padding: 7px;
    cursor: pointer;
    background-color: var(--clr-red);
    color: var(--clr-alabaster);
    border-radius: var(--border-radius);
  }
`;
