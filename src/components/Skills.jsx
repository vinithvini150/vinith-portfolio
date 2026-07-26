import { motion } from "framer-motion";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiFirebase,
  SiGit,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiExpress,
  SiVite,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact />, color: "#61DAFB", level: "Advanced" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E", level: "Intermediate" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: "Intermediate" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: "Advanced" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", level: "Intermediate" },
  { name: "Git", icon: <SiGit />, color: "#F05032", level: "Intermediate" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", level: "Intermediate" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", level: "Advanced" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", level: "Advanced" },
  { name: "CSS3", icon: <SiCss />, color: "#1572B6", level: "Advanced" },
  { name: "Express", icon: <SiExpress />, color: "#ffffff", level: "Intermediate" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF", level: "Intermediate" },
];

function Skills() {
  return (
    <section className="skills section" id="skills">

      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MY <span>SKILLS</span>
        </motion.h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >

              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <span>{skill.level}</span>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;