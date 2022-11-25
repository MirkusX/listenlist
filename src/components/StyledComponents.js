import styled from "styled-components";

export const MixContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 1em;
  background: blue;
  border-radius: 3px;
  gap: 1em;
  @media (max-width: 811px) {
    width: 50%;
  }
`;

export const StyledImg = styled.img`
  @media (max-width: 811px) {
    width: 100%;
  }
`;

export const InnerMixContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 1em;
  background: #283618;
  min-height: 100vh;
  @media (max-width: 811px) {
    justify-content: space-between;
  }
`;

export const StyledInput = styled.input`
  padding: 1em 0.5em;
  width: 50%;
  font-family: "Oswald", sans-serif;
  font-size: 1.5rem;
  outline: none;
`;

export const StyledA = styled.a`
  color: #fefae0;
`;

export const MixList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 811px) {
    width: 30%;
  }
`;

export const NavDiv = styled.div`
  background: blue;
  height: fit-content;
  padding: 1.5em;
  width: 20%;
`;

export const StyledButton = styled.button`
  background: darkblue;
  font-family: "Oswald", sans-serif;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #caf0f8;
  }
  ${(props) => {
    if (props.red)
      return `
    background: red;
    margin-left: 1em;`;
  }}
`;

export const StyledListDiv = styled.div`
  border: black 3px solid;
  padding: 1em;
  margin-bottom: 1em;
`;

export const StyledLi = styled.li`
  list-style-type: none;
`;
