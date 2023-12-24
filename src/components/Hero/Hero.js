import React, { useState, useEffect } from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, TypeWritter } from './HeroStyles';

const Hero = (props) => {
    const [text, setText] = useState('');
    const messages = [
        "I'm a professional developer.",
        "I specialize in machine learning.",
        "I'm experienced in full-stack development.",
        "I'm always learning.",
        "Thanks for stopping by."
    ];
    const delay = 60; // Typing speed in milliseconds
    const waitTime = 1000; // Time to wait after finishing typing (in milliseconds)

    const typeWriter = async (message, index, currentText) => {
        if (index < message.length) {
            setText(currentText + message.charAt(index));
            await sleep(delay);
            await typeWriter(message, index + 1, currentText + message.charAt(index));
        } else {
            // Wait for a moment after finishing typing
            await sleep(waitTime);
            // Initiate backspace effect
            await backspace(message, currentText);
        }
    };

    const backspace = async (message, currentText) => {
        for (let i = message.length; i >= 0; i--) {
            setText(currentText.slice(0, i));
            await sleep(delay);
        }
        // Move on to the next message
        const nextIndex = (messages.indexOf(message) + 1) % messages.length;
        typeWriter(messages[nextIndex], 0, '');
    };

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        // Start typing the first message when the component mounts
        typeWriter(messages[0], 0, '');
    }, []); // Run once on mount


    // Emulate scroll-wheel down
    const handleButtonClick = () => {
        window.scrollBy(0, window.innerHeight);
    };

    return (
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Hey, I'm Shane.
                </SectionTitle>
                <TypeWritter>
                    {text}
                </TypeWritter>
                <Button onClick={() => handleButtonClick()}> ↓ </Button>
            </LeftSection>
            {/* <img src="/images/face.png" alt="Face" style={{ maxWidth: "400px" }}/> */}
        </Section>
    );
};

export default Hero;
