import React, { useState, useEffect, useRef } from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { ChatbotContainer, Chatbox, ChatMessage, ChatInput, StyledTextarea, ChatButton } from './ChatbotStyles';
import { OPENAI_API_KEY, OPENAI_ASS_ID } from "../../../env.js"
import { chatMessagePrompts } from '../../constants/constants';

const OpenAI = require("openai");
let promptIndex = 0;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there! How can I help you today?', type: 'incoming' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const chatboxRef = useRef(null);

  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });


  const handleSendMessage = async () => {
    if (newMessage.trim() === '') {
      return;
    }

    const newMessages = [
      ...messages,
      { id: messages.length + 1, text: newMessage, type: 'outgoing' },
    ];

    setMessages(newMessages);
    setNewMessage('');

    try {
      // Create a thread
      const thread = await openai.beta.threads.create();

      // Pass in the user question into the existing thread
      await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: newMessage,
      });

      // Use runs to wait for the assistant response and then retrieve it
      const run = await openai.beta.threads.runs.create(thread.id, {
        assistant_id: OPENAI_ASS_ID
      });

      let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

      while (runStatus.status !== "completed") {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      }

      const assistantMessage = await openai.beta.threads.messages.list(thread.id);

      const lastMessageForRun = assistantMessage.data
        .filter(
          (message) => message.run_id === run.id && message.role === "assistant"
        )
        .pop();

      // If an assistant message is found, update state with the response
      if (lastMessageForRun) {
        const assistantResponse = lastMessageForRun.content[0].text.value.replaceAll(/【.*?】/g, '');
        setMessages([...newMessages, { id: newMessages.length + 1, text: assistantResponse, type: 'incoming' }]);
      }

    } catch (error) {
      console.error(error);
    }
  };


  const setNextPrompt = () => {
    if (promptIndex === chatMessagePrompts.length) {
      promptIndex = 0;
    }
    setNewMessage(chatMessagePrompts[promptIndex]);
    promptIndex++;
  };

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleTextareaKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Enter submits message // Shift+Enter adds new line
      handleSendMessage();
    }
  };

  return (
    <Section>
      <SectionTitle>Talk To Me!</SectionTitle>
      <ChatbotContainer>
        <Chatbox className="chatbox" ref={chatboxRef}>
          {messages.map((message) => (
            <ChatMessage key={message.id} className={`chat ${message.type}`}>
              <p>{message.text}</p>
            </ChatMessage>
          ))}
        </Chatbox>

        <ChatInput>
          <StyledTextarea
            id="txtArea"
            placeholder="Send a message..."
            spellCheck="false"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleTextareaKeyDown}
            required
          />
          <ChatButton onClick={setNextPrompt} id="pmt">
            🎲
          </ChatButton>
          <ChatButton onClick={handleSendMessage}>
            ↑
          </ChatButton>
        </ChatInput>
      </ChatbotContainer>
    </Section>
  );
};

export default Chatbot;
