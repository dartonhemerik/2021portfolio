import React, { useState } from 'react';
import Cosw20Project from './Cosw20Project';
import { cosw20Projects } from './data';
import Footer from './Footer';

const Cosw20 = () => {
  const [projects, setProjects] = useState(cosw20Projects);

  return (
    <body className='site'>
      <header className='title'>
        <h2>HTML/CSS Projects</h2>
        <div className='underline'></div>
      </header>
      <section className='projects-container'>
        {projects.map((project) => {
          return (
            <Cosw20Project
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

export default Cosw20;
