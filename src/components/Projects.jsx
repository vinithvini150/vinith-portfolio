import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

const projects = [
  {
    title: "Student SkillSwap",
    image: project1,
    description:
      "A MERN-based platform where students can teach and learn skills through authentication, real-time collaboration and a responsive dashboard.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
    ],
    github: "https://github.com/Vinithvini150/student-skillswap-platform",
    demo: "https://vinithvini150.github.io/student-skillswap-platform/",
    status: "completed",
  },

  {
    title: "AI Quiz Generator",
    image: project2,
    description:
      "AI-powered quiz generation platform with authentication, smart question generation and beautiful responsive interface.",
    tech: [
      "React",
      "Firebase",
      "OpenAI",
      "CSS",
    ],
    github: "",
    demo: "",
    status: "coming",
  },

  {
    title: "Personal Portfolio",
    image: project3,
    description:
      "Modern developer portfolio built with React, Framer Motion and premium UI animations showcasing projects and skills.",
    tech: [
      "React",
      "Framer Motion",
      "CSS",
      "Vite",
    ],
    github: "https://github.com/vinithvini150/vinith-portfolio",
    demo: "https://vinith-portfolio-ashy.vercel.app/",
    status: "Completed",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          MY <span>PROJECTS</span>
        </motion.h2>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
    key={index}
    className="project-card"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    viewport={{ once: true }}
>

    <div className="project-image">

        <img
            src={project.image}
            alt={project.title}
        />

        {project.status === "coming" && (
            <div className="project-overlay">
                Coming Soon
            </div>
        )}

    </div>

    <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">

            {project.tech.map((item, i) => (

                <span key={i}>
                    {item}
                </span>

            ))}

        </div>

        <div className="project-buttons">

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub size={18} />
    <span>GitHub</span>
  </a>

  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
  >
    <ExternalLink size={18} />
    <span>Live Demo</span>
  </a>

</div>

    </div>

</motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;