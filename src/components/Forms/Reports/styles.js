import styled from 'styled-components';

export const StyledH1 = styled.h1`
color: rgb(248, 248, 248);
font-variant-caps: all-small-caps;
font-size: 48px;
font-weight: bold;
`;

export const StyledForm = styled.form`
  background-color: rgb(207, 207, 207);
  border-radius: 20px;
  box-shadow: 0  0 10px 0 gray;
  padding: 30px;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 20px;
  color: black;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: left;
  font-variant-caps: all-small-caps;
`;

export const StyledInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  margin-top: 20px;
  transition: all 200ms;

&:hover, &:focus{
  outline: none;
  border: none;
  border-bottom: 1px solid #ff2929;
}
`;

export const StyledButton = styled.button`
  border: 1px solid #522323;
  border-radius: 40px;
  color: #522323;
  text-decoration: none;
  text-align: center;
  padding: 7px 13px;
  background: transparent;
  transition: all 300ms;
  margin: 20px 10px 20px 10px;

  &:hover{
    border: 1px solid #522323;
  border-radius: 40px;
  color: white;
  text-decoration: none;
  padding: 7px 13px;
  background: #522323;
  text-align: center;
  }
`;
