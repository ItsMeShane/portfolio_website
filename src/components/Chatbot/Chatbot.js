import React, { useState, useEffect, useRef } from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ChatbotContainer, Chatbox, ChatMessage, ChatInput, StyledTextarea, SendButton } from './ChatbotStyles';
const OpenAI = require("openai");

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there! How can I help you today?', type: 'incoming' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0); // Track the current index of the placeholder
  const chatboxRef = useRef(null);
  const placeholderTexts = [
    "Tell me about Shane's work experience.",
    "What kind of projects has Shane worked on?",
    "Tell me about this website.",
    "How can I contact Shane?",
    "Ask me anything!",
  ];

  const openai = new OpenAI({
    apiKey: 'API_KEY_HERE',
    dangerouslyAllowBrowser: true,
  });

  const getRandomPlaceholder = () => {
    const newIndex = Math.floor(Math.random() * placeholderTexts.length);
    setPlaceholderIndex(newIndex);
    return placeholderTexts[newIndex];
  };

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
        assistant_id: "ASSISTANT_ID_HERE",
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

      if (document.getElementById('txtArea').textContent.trim() != "") {
        getRandomPlaceholder();
      }
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
          <StyledTextarea id="txtArea"
            placeholder={newMessage.trim() === '' ? placeholderTexts[placeholderIndex] : ''} // Use random placeholder only when the input is empty
            spellCheck="false"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleTextareaKeyDown}
            required
          />
          <SendButton className="send-btn" onClick={handleSendMessage}>
            ↑
          </SendButton>
        </ChatInput>
      </ChatbotContainer>
    </Section>
  );
};

export default Chatbot;
