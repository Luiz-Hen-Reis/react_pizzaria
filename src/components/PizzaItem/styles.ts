import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #333;
  margin: 10px 0;
  cursor: pointer;

  .pizza-image {
    margin: 5px 10px;

    img {
      width: 120px;
      height: 120px;
    }
  }

  .pizza-info {
    p {
        font-size: 14px;
        color: var(--clr-description);
    }
  }
`;
