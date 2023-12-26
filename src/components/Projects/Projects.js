// Projects.js
import React from 'react';
import { ProjectWrapper, VideoWrapper, DetailsWrapper, ProjectTitle, ProjectDescription, ProjectTags, ProjectLink, ProjectsContainer } from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects" snap>
    <SectionTitle>Projects</SectionTitle>
    <ProjectsContainer>
      {projects.map(({ id, title, description, ytEmbedLink, tags, githubRepo }) => (
        <ProjectWrapper key={id}>
          <VideoWrapper>
            <iframe
              width="100%"
              height="100%"
              src={`${ytEmbedLink}`}
              title="Video player"
              frameBorder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
              allowFullScreen
            ></iframe>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/BtHpGZDO1P8?si=5gb4vQbfw8_OWUp5&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </VideoWrapper>
          {/* <DetailsWrapper>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectDescription>{description}</ProjectDescription>
              <ProjectTags>{tags.join(', ')}</ProjectTags>
              <ProjectLink href={githubRepo} target="_blank">GitHub Repository</ProjectLink>
            </DetailsWrapper> */}
        </ProjectWrapper>
      ))}
    </ProjectsContainer>
  </Section>
);

export default Projects;