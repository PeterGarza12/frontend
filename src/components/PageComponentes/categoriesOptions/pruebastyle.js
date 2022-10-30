import styled, {css} from "styled-components";

export const ListItems = styled.li`
  color: black;
  font-variant-caps: all-small-caps;
  background-color: white;
  width: 100%;
  font-size: 20px;
  border-radius: 5px 5px 0 0;
  transition: all 300ms;
  font-weight: bold;


  &:hover{
    cursor: pointer;

  }


  ${(props) =>
    props.activeTab &&
    css`
      color: white;
      background-color: #753232;
      font-weight: bold;
      transform: scale(1.03);


      ::after {
        content: "";
        position: relative;
        height: 5px;
        margin-top: 0.5rem;
        border-radius: 5px 5px 0 0;
        display: block;
      }
    `}
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: row;

  justify-content: space-around;
`;

export const Div = styled.div`
  justify-content:center;
`;
