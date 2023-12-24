import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import Chatbot from '../components/Chatbot/Chatbot';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <img
  src="/images/face.png"
  alt="Face"
  style={{
    maxWidth: "400px",
    userDrag: "none",
    userSelect: "none",
    MozUserSelect: "none",
    WebkitUserDrag: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none"
  }}
/>
        <BgAnimation />
      </Section>
      <Chatbot />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
