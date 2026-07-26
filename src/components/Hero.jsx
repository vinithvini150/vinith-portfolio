import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight } from "lucide-react";
import CountUp from "react-countup";


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


import profile from "../assets/images/profile.png";
import HeroBackground from "./HeroBackground";
import Spotlight from "./Spotlight";



const techIcons = [
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },

    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },

    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },

    { name: "Git", icon: <SiGit />, color: "#F05032" },

    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },

    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },

    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },

    { name: "CSS3", icon: <SiCss />, color: "#1572B6" },

    { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },

    { name: "Vite", icon: <SiVite />, color: "#646CFF" },
];

function Hero() {
    return (
        <section id="home" className="hero">

            <HeroBackground />

            <Spotlight />

            {/* LEFT */}

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >

                <p className="hero-subtitle">
                    WELCOME TO MY PORTFOLIO
                </p>

                <h1 className="hero-title">
                    VINITH <span>KUMAR</span> .M
                </h1>

                <TypeAnimation
                    sequence={[
                        "Full Stack Developer",
                        1500,
                        "React Developer",
                        1500,
                        "Frontend Developer",
                        1500,
                        "AI Web Developer",
                        1500,
                    ]}
                    speed={40}
                    repeat={Infinity}
                    className="typing"
                />

                <p className="hero-description">
                    I build modern websites, scalable web applications,
                    responsive dashboards and AI-powered digital experiences
                    with clean architecture and premium UI.
                </p>

                <div className="hero-buttons">

                    <button className="btn-primary">
                        Hire Me
                        <ArrowRight size={18} />
                    </button>
                    <a
                        href="src\assets\projects\Vinith_Kumar_M_Resume.pdf"
                        download
                        className="btn-secondary"
                    >
                        Resume
                    </a>

                </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
                className="hero-image"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >

                <div className="profile-wrapper">

                    <div className="orbit-container">

                        {techIcons.map((tech, index) => {

                            const angle = (360 / techIcons.length) * index;

                            return (
                                <div
                                    key={index}
                                    className="orbit"
                                    style={{
                                        "--angle": `${angle}deg`,
                                    }}
                                    data-name={tech.name}
                                >
                                    <div className="orbit-icon" style={{ color: tech.color }}>
                                        {tech.icon}
                                    </div>
                                </div>
                            );

                        })}

                    </div>

                    <div className="ring"></div>

                    <div className="ring ring2"></div>

                    <div className="image-circle">
                        <img
                            src={profile}
                            alt="Vinith Kumar"
                        />
                    </div>

                </div>
                <div className="glass-card card1">

                    <h3>10+</h3>

                    <p>Technologies</p>

                </div>

                <div className="glass-card card2">

                    <h3>3+</h3>

                    <p>Projects</p>

                </div>

            </motion.div>

        </section>
    );
}

export default Hero;