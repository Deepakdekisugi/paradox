import React from 'react';

const ProjectSection = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-container">
      <div className="project">
        <img src="project1.jpg" alt="Project 1" />
        <h3>Project 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {/* Add more details or links as needed */}
      </div>
      <div className="project">
        <img src="project2.jpg" alt="Project 2" />
        <h3>Project 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {/* Add more details or links as needed */}
      </div>
      {/* Add more projects as needed */}
    </div>
  </section>
);

export default ProjectSection;
