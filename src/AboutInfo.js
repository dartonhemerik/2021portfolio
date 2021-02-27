import { FaBars } from 'react-icons/fa';
import { social } from './data';

function AboutInfo() {
  return (
    <section style={{ backgroundImage: 'url(/media/darton2.jpg)' }}>
      <div className='overlay'>
        <div className='about-container'>
          <div id='about-text'>
            <h2 id='about-shortcut'>About</h2>
            <p>
              Hello there! I am currently pursuing an AS in Web Development at
              Long Beach City College. I hope to also attain a bachelor's and
              ultimately land a career in the web development field.
            </p>
            <p>
              Thank you for taking the time to check out my work. I really
              appreciate it.
            </p>
            <p>
              <b>Darton Hemerik | Long Beach, CA</b>
            </p>
            <div className='contact-wrapper'>
              <h3>Contact Me:</h3>
              <a href='mailto:hemerikd@gmail.com'>hemerikd@gmail.com</a>
              <ul className='contact-social-icon-wrapper'>
                {social.map((socialIcon) => {
                  const { id, url, icon } = socialIcon;
                  return (
                    <li key={id} className='contact-social-icon'>
                      <a href={url} target='_blank'>
                        {icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutInfo;
