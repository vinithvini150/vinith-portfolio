import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Zap,
  Brain,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: <Code2 size={40} />,
    title: "Clean Code",
    description:
      "Well-structured, maintainable, and scalable code following modern development practices.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Responsive Design",
    description:
      "Websites optimized for desktop, tablet, and mobile with a seamless user experience.",
  },
  {
    icon: <Zap size={40} />,
    title: "Fast Performance",
    description:
      "Optimized websites with fast loading speed and smooth user interactions.",
  },
  {
    icon: <Brain size={40} />,
    title: "AI Integration",
    description:
      "Integration of AI features such as chatbots, quiz generators, and intelligent automation.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Modern Technologies",
    description:
      "Built using React, Node.js, MongoDB, Firebase, Vite, and other modern technologies.",
  },
  {
    icon: <Headphones size={40} />,
    title: "Support",
    description:
      "Continuous support, updates, bug fixes, and improvements after project delivery.",
  },
];

function WhyChooseMe() {
  return (
    <section className="why section" id="why">

      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WHY <span>CHOOSE ME</span>
        </motion.h2>

        <div className="why-grid">

          {features.map((item, index) => (

            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseMe;