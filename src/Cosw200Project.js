import React, { useState } from 'react';

const Cosw200Project = ({ id, title, url, image, info, tools }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article key={id} className='project dropdown'>
      <a href={url} target='_blank' rel='noreferrer'>
        <span className='dropdown-content'>Check Out</span>
        <h3>{title}</h3>
        <img src={image} alt={title} className='test' />
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

export default Cosw200Project;
