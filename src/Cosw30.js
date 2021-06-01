import React, { useState } from 'react';
import Cosw30Project from './Cosw30Project';
import { cosw30Projects } from './data';
import Footer from './Footer';

const Cosw30 = () => {
  const [projects, setProjects] = useState(cosw30Projects);

  return (
    <body className='site'>
      <header className='title'>
        <h2>PHP Projects</h2>
        <div className='underline'></div>
      </header>
      <section className='projects-container'>
        {projects.map((project) => {
          return (
            <Cosw30Project
              id={project.id}
              title={project.title}
              url={project.url}
              image={project.image}
              info={project.info}
              tools={project.tools}
            />
          );
        })}
      </section>
    </body>
  );
};

export default Cosw30;
