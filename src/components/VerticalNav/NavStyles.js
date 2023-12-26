import styled from 'styled-components'

export const DropDownContainer = styled.nav`
  position: fixed;
  height: 80%;
  top: 10%;
  z-index: 100;

  left:30px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  font-size: 5rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3.6rem;
    left:20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
  left:10px;

  }
`;

export const DropDownItem = styled.a`
  transition: .3s ease;
  padding: 12px 16px;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
    background-color: #eee;
    box-shadow: 0 3px 6px 3px rgba(0,0,0,.3);
  }

  &:nth-of-type(2n):hover {
    box-shadow: 0 0 8px 4px rgba(0,0,0,.3);
  }

  &:nth-of-type(3n):hover {
    box-shadow: 0 -3px 6px 3px rgba(0,0,0,.3);
  }
`
