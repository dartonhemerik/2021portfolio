import React, { useState } from 'react';

const Cosw30Project = ({ id, title, url, image, info, tools }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article key={id} className='project dropdown project-HC'>
      <a href={url} target='_blank' rel='noreferrer'>
        <span className='dropdown-content-HC'>Check Out</span>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <div className='tools-container'>
          {tools.map((tool, index) => {
            return (
              <div key={index}>
                <h4>{tool}</h4>
              </div>
            );
          })}
        </div>
      </a>
      <p>
        {readMore ? info : `${info.substring(0, 50)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
    </article>
  );
};

export default Cosw30Project;
