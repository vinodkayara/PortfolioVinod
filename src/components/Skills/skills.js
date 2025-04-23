import React from 'react';
import './skills.css';
import UIDesign from '../Skills/ui-design.png';
import WebDesign from '../Skills/website-design.png';
import AppDesign from '../Skills/app-design.png';

function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>
            I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software.
        </span>
        <div className='skillBars'>
            {/* First Skill Bar */}
            <div className='skillBar'>
                <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Front-End Development</h2>
                    <p>
                        I have undertaken projects related to Front-End Development and effectively use React.js and other frameworks.                       
                    </p>
                </div>
            </div>

            {/* Second Skill Bar */}
            <div className='skillBar'>
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>
                        I created e-commerce websites and personal websites using React.js and Node.js.
                    </p>
                </div>
            </div>

            {/* Third Skill Bar */}
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Full-Stack Development</h2>
                    <p>
                        I worked on projects using Java and PostgreSQL, and I also have basic knowledge of APIs.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;
