import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";

function About() {
    return (

        <section id="about" className="about section">

            <div className="container">

                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    ABOUT <span>ME</span>
                </motion.h2>

                <div className="about-grid">

                    {/* LEFT */}

                    <motion.div
                        className="about-image-card"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <img
                            src={profile}
                            alt="Vinith Kumar"
                        />

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <h3>

                            Passionate Full Stack Developer
                            building modern digital products.

                        </h3>

                        <p>

                            I'm Vinith Kumar, a Full Stack Web Developer
                            specializing in React, Node.js, MongoDB,
                            Firebase, and modern frontend technologies.

                            I enjoy creating premium user experiences,
                            AI-powered web applications, dashboards,
                            responsive business websites, and scalable
                            full-stack solutions.

                        </p>

                        <div className="about-cards">

                            <div className="mini-card">

                                <h4>Experience</h4>

                                <p>Fresher</p>

                            </div>

                            <div className="mini-card">

                                <h4>Education</h4>

                                <p>MCA</p>

                            </div>

                            <div className="mini-card">

                                <h4>Location</h4>

                                <p>Hosur, India</p>

                            </div>

                            <div className="mini-card">

                                <h4>Specialization</h4>

                                <p>Full Stack Development</p>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>

    );
}

export default About;