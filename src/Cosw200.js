import React, { useState } from 'react';
import Cosw200Project from './Cosw200Project';
import { cosw200Projects } from './data';
import Footer from './Footer';

const Cosw200 = () => {
  const [projects, setProjects] = useState(cosw200Projects);

  return (
    <body className='site'>
      <header className='title'>
        <h2>JS Projects</h2>
        <div className='underline'></div>
      </header>
      <section className='projects-container'>
        {projects.map((project) => {
          return (
            <Cosw200Project
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

export default Cosw200;
