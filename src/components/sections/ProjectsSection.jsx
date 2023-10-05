import React from "react";
import { FaGithub } from "react-icons/fa";
import { Projects } from "../../data/Projects";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
    ProjectDescription,
  ProjectImageContainer,
  SingleProject,
  SlantedCard,
  StyledProjectsSection,
  Tags
} from "../styles/sections/ProjectsSection.styled";

export const ProjectsSection = () => {
  return (
    <>
     
      <StyledProjectsSection id="projects">
        <SectionHeading>
          <h1>Projects</h1>
          <p> These are my Projects</p>
        </SectionHeading>
        <div>
          {Projects &&
            Projects.map((project, index) => (
              <SingleProject key={index}>
                <ProjectImageContainer href={project.projectlink} target="_blank" >
                  <img src={project.thumbnail} alt="{project.title}" />
                  <SlantedCard/>
                </ProjectImageContainer>
                <ProjectDescription>
                  <h1>{project.title}</h1>
                  <Tags>
                    {project.tags &&
                      project.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                  </Tags>
                  <p>{project.paragraph}</p>
                  <div>
                    <a href={project.codelink} target="_blank ">
                      <FaGithub />
                      <span>View </span>
                    </a>
                    <a href={project.projectlink} target="_blank ">
                    
                      <span>{project.projectlinkText}</span>
                      </a>
                  </div>
                </ProjectDescription>
              </SingleProject>
            ))}
        </div>
      </StyledProjectsSection>
      <hr/>
    </>
  );
};
