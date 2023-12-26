import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  overflow-x: auto; 
  overflow-y: auto; 
  scroll-snap-type: both mandatory; 
  /* width: 100%; // 1040px */
  min-height: 60vh;
  position: relative;


  
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const ProjectWrapper = styled.div`
  flex: 0 0 auto; 
  scroll-snap-align: start; 
  width:100%;
  margin-bottom:15px;
`;

export const VideoWrapper = styled.div`

  aspect-ratio:16/9;

`;

export const DetailsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ProjectTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ProjectTags = styled.div`
  margin-bottom: 20px;
  font-style: italic;
`;

export const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectSection = styled.div``;