import styled from "styled-components";

//Stylings

export const MixContainer = styled.div`
  display: flex;
  width: 95%;
  margin: 1em;
  background: blue;
  border-radius: 3px;
  gap: 1em;
  padding: 1em;
  @media (max-width: 811px) {
    width: 90%;
    flex-direction: column;
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
  justify-content: space-between;
  width: 100%;
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  @media (max-width: 811px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  background: #283618;
  min-height: 100vh;
  background-size: contain;
  @media (max-width: 811px) {
    align-items: center;
    flex-direction: column;
    justify-content: start;
  }
`;

export const StyledInput = styled.input`
  padding: 1em 0.5em;
  width: 50%;
  font-family: "Oswald", sans-serif;
  font-size: 1rem;
  outline: none;
  @media (max-width: 811px) {
    margin-top: 1em;
  }
`;

export const StyledA = styled.a`
  color: #fefae0;
  font-size: 1.5rem;
`;

export const MixList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 811px) {
    width: 100%;
  }
`;

export const NavDiv = styled.div`
  background: #ffb703;
  height: fit-content;
  padding: 1.5em;
  width: 25%;
  display: none;
  position: absolute;
  max-height: 35em;
  overflow: scroll;
  @media (max-width: 811px) {
    width: 70%;
    max-height: 15em;
  }
  ${(props) => {
    if (props.show) {
      return `
      display: block`;
    }
  }}
`;

export const StyledButton = styled.button`
  background: darkblue;
  font-family: "Oswald", sans-serif;
  cursor: pointer;
  border: none;
  font-size: 1.5rem;
  &:hover {
    background-color: #fb8500;
  }
  ${(props) => {
    if (props.red)
      return `
    background: red;
    margin-left: 1em;`;
  }}
  ${(props) => {
    if (props.overlay)
      return `
    padding: 1em;
    color: white;`;
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

export const OuterList = styled.div`
  width: 30%;
  @media (max-width: 811px) {
    width: 80%;
  }
`;
