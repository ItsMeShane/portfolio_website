import styled from 'styled-components';

export const LeftSection = styled.div`
// big
  width: 100%;
  min-width:600px;
  /* border: 2px solid #b5cea8; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;


  // mobile
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    min-width:200px;
  }
`

export const TypeWritter = styled.h2`
  color: #b5cea8;
  min-height:100px;
  font-weight: 800;
  font-size: 28px;
  
  display: flex;
    flex-direction: column;
`

