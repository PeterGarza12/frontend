import styled, {css} from "styled-components";

export const ListItems = styled.li`
  color: black;
  width: 100%;
  font-size: 20px;

  ${(props) =>
    props.activeTab &&
    css`
      color: white;
      background-color: #753232;
      font-weight: bold;
      border-radius: 5px 5px 0 0;

      ::after {
        content: "";
        position: relative;
        height: 5px;
        margin-top: 0.5rem;
        border-radius: 5px 5px 0 0;
        background-color: #753232;
        display: block;
      }
    `}
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: row;
  border-bottom: 1px solid lightgray;

  justify-content: space-around;
`;

export const Div = styled.div`
  justify-content:center;
`;
