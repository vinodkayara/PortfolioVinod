import React from 'react';
import './intro.css';
import bg from '../Intro/vinod.jpeg';
import btnImg from '../Intro/hireme.png';

function Intro() {
  return (
    <section id='intro'>
      <div className='introContainer'>
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='intoText'>I'm <span className="introName">Vinod</span><br />Website Designer</span>
          <p className='introPara1'>I am a skilled web designer with experience in creating<br />visually appealing and user-friendly websites.</p>
          <div className="buttonContainer">
            <a href="https://drive.google.com/file/d/1jr-AI1OF96Y7_Y7lU9jJ15v8GEjdUk4T/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className='btn'>
                <img src={btnImg} alt="Resume" className='btnImg' /> Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className='introImage'>
          <img src={bg} alt="Vinod" className='bg' />
        </div>
      </div>
    </section>
  );
}

export default Intro;
