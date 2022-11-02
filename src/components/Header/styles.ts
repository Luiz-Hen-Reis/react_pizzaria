import styled from "styled-components";

export const Wrapper = styled.header`
  height: 120px;
  background-color: var(--clr-alabaster);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .company-name {
    flex: 80%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo {
    width: 60px;
    height: 60px;
    background-color: var(--clr-yellow);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }

  .title {
    font-family: var(--header-title);
    font-size: 14px;
    margin-right: 10px;

    @media screen and (min-width: 768px) {
      font-size: 22px;
    }
  }

  .cart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: var(--clr-yellow);
    cursor: pointer;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      margin-left: 50px;
      margin-top: -40px;
      color: var(--clr-yellow);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--clr-red);
    }
  }
`;
