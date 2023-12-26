import Accomplishments from '../components/Acomplishments/Accomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Photo from '../components/Hero/Photo';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import Chatbot from '../components/Chatbot/Chatbot';
import Navigation from '../components/VerticalNav/Navigation';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Layout>
        <Section grid>
          <Hero />
          <Photo />
          <BgAnimation />
        </Section>
        <Chatbot />
        <Projects />
        <Technologies />
        <Timeline />
        <Accomplishments />
      </Layout>
    </div>
  );
};

export default Home;
