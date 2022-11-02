import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: 2rem;
`;

export const PizzaArea = styled.div`
   h1 {
        margin: 30px 20px;
    }
`;

export const PizzaMenu = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
`;

export const CartSideDisplay = styled.div`
    width: 450px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--clr-blue);
`;