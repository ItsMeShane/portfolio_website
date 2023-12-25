import styled, { keyframes } from 'styled-components';

// Styled components for the chatbot
export const ChatbotContainer = styled.div`
  display: block;
  /* flex-direction: column; */
  align-self: center;
  width: 80%;
  margin: 20px;
  overflow: hidden;
  font-size: 2.2rem;

  
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
  max-width:80%;
  padding: 8px;
  animation: ${messageFadeIn} 0.5s ease;

  &.incoming {
    background-color: purple;
    border-radius: 15px 15px 15px 0;
    margin-left: 0; 
  }

  &.outgoing {
    background-color: darkblue;
    border-radius: 15px 15px 0 15px;
    margin-left: auto; 
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
  min-width:  55px;
  max-height: 55px;
  max-width:  55px;
  color: #fff; 
  border: none;
  cursor: pointer;
  font-size: 3rem;
  
  /* border: 1px solid #ccc; */
  /* border-radius: 15px; */
`;

