import React, { useState } from 'react';
import './works.css';
import allbit from '../Works/allbit.png';
import codelab from '../Works/codelab.png';
import Mite from '../Works/Mite.png';
import nmc from '../Works/nmc.png';
import kuria from '../Works/kuria.jpg';

function Works() {
  const [showCertificates, setShowCertificates] = useState(false);

  const workData = [
    {
      img: allbit,
      title: "Allbit Technologies LLP",
      desc: "Fullstack Development Intern - Developed Java & React-based web apps.",
    },
    {
      img: codelab,
      title: "Code Lab Systems",
      desc: "Fullstack Development Intern - Built an e-commerce site using MERN stack.",
    },
    {
      img: Mite,
      title: "MITE - Education",
      desc: "B.E in ISE (2021–Present) with a CGPA of 8.3.",
    },
    {
      img: nmc,
      title: "NMC PU College",
      desc: "Completed Pre-University with distinction in PCMC stream.",
    },
     {
      img: kuria,
      title: "Blessed Kuria Kose school Guthigar",
      desc: "Completed SSLC with distinction .",
    },

  ];

  const certificates = [
    { name: " HTML and CSS By Devtown", link: "https://drive.google.com/file/d/1C3CQkOsdxsG0DDLZ11aYOJfeEd1GqJUx/view" },
    { name: "Crash Course on Python authorized by Google – Coursera.", link: "https://drive.google.com/file/d/1g3h_o2Ok1RZJQz6B-Bn7-meCnRvJOH8R/view" },
    { name: "Postman API Workshop", link: "https://drive.google.com/file/d/1fqzcIqEIjghnKQ63QgrHBTQF4bpvpAad/view" },
    { name: " “Network Basics Course” – CISCO Networking Academy", link: "https://drive.google.com/file/d/1TJxygWTWd39sRaaRhB450MigFDehrc3c/view" },
    { name: "Cyber Security and Applied Ethical Hacking-Infosys", link: "https://drive.google.com/drive/folders/1IrrZo2RVw0WwZUZTYsa6GL9j7oEz6gSI?usp=sharing" }
  ];

  return (
    <section id="works">
      <h2 className="workstitle">Work Experience & Education</h2>
      <span className="worksDesc">
      My skills and experience help businesses grow and create a strong online presence, built upon a foundation of education and practical experience.
      </span>

      <div className="worksGrid">
        {workData.map((work, index) => (
          <div key={index} className="worksCard">
            <img src={work.img} alt={work.title} className="worksImg" />
            <div className="worksText">
              <h3>{work.title}</h3>
              <p>{work.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="worksbtn" onClick={() => setShowCertificates(!showCertificates)}>
        {showCertificates ? "Hide Certificates" : "COURSE CERTIFICATES"}
      </button>

      {showCertificates && (
        <div className="certificateList">
          <h3>Certificates</h3>
          <ul>
            {certificates.map((cert, index) => (
              <li key={index}>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Works;
