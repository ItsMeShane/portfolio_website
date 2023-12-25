import styled, { keyframes } from 'styled-components';

// Styled components for the chatbot
export const ChatbotContainer = styled.div`
  display: block;
  /* flex-direction: column; */
  align-self: center;
  width: 80%;
  height: 80%;
  margin: 20px;
  overflow: hidden;
  font-size: 2.2rem;

  
/* border:3px solid ; */
  
`;


export const Chatbox = styled.div`
flex: 1;
padding: 15px;
max-height: 400px;
min-height: 400px;

overflow-y: auto;
scroll-behavior: smooth; /* Enable smooth scrolling behavior */

/* Hide scrollbar, as it might interfere with the smooth scrolling */
scrollbar-width: thin;
scrollbar-color: transparent transparent;

/* Styling for WebKit browsers (Chrome, Safari) */
&::-webkit-scrollbar {
  width: 8px;
}

&::-webkit-scrollbar-thumb {
  background-color: transparent;
}

&::-webkit-scrollbar-track {
  background-color: transparent;
}

/* Transition for smooth scrolling animation */
transition: scroll-behavior 0.5s ease;
`;



export const messageFadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;



export const ChatMessage = styled.div`
  margin-bottom: 10px;
  width: fit-content;
  max-width: 80%;
  padding: 8px;
  transition: transform 0.3s ease;
  animation: ${messageFadeIn} 0.5s ease;

  &.incoming {
    background: linear-gradient(to right, #4d004d, #990099, #4d004d);
    border-radius: 15px 15px 15px 15px;
    margin-left: 0;

    &:hover {
      transform: translateX(10px);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 100%;
      width: 10px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: inherit;
      transition: transform 0.3s ease;
      transform-origin: left center;
      transform: scaleX(0);
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }

  &.outgoing {
    background: linear-gradient(to right, #12254c, #3366cc, #12254c);
    border-radius: 15px 15px 15px 15px;
    margin-left: auto;

    &:hover {
      transform: translateX(-10px);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 100%;
      width: 10px;
      background: #878b92;
      border-radius: inherit;
      transition: transform 0.3s ease;
      transform-origin: right center;
      transform: scaleX(0);
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }
`;



export const ChatInput = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
`;

export const StyledTextarea = styled.textarea`
  flex: 1;
  padding: 8px;
  width: 100%;
  outline: none;
  border: none;
  margin-right: 10px;
  resize: none;
  background: transparent; 
  color: #fff; 
`;

export const ChatButton = styled.button`
  background-color: transparent;
  min-height: 55px;
  min-width: 55px;
  max-height: 55px;
  max-width: 55px;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  transition: font-size 0.25s ease; 

  &:hover {
    font-size: 3.5rem; 
  }
  &[id="pmt"]:active {
    font-size: 3.3rem; 
  }
`;

