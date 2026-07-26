import { motion } from "framer-motion";

import {
  Globe,
  LayoutDashboard,
  ShoppingCart,
  Brain,
  Smartphone,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: <Globe size={45} />,
    title: "Portfolio Websites",
    description:
      "Modern, responsive and premium portfolio websites with beautiful UI and animations.",
  },
  {
    icon: <LayoutDashboard size={45} />,
    title: "Business Websites",
    description:
      "Professional company websites with dashboards, admin panels and responsive layouts.",
  },
  {
    icon: <ShoppingCart size={45} />,
    title: "E-Commerce",
    description:
      "Online shopping websites with secure authentication, product management and payments.",
  },
  {
    icon: <Brain size={45} />,
    title: "AI Integration",
    description:
      "Integrate AI chatbots, quiz generators, automation and intelligent web features.",
  },
  {
    icon: <Smartphone size={45} />,
    title: "Responsive Design",
    description:
      "Pixel-perfect responsive websites that work beautifully on desktop, tablet and mobile.",
  },
  {
    icon: <Wrench size={45} />,
    title: "Website Maintenance",
    description:
      "Bug fixing, performance optimization, redesigns and ongoing website maintenance.",
  },
];

function Services() {
  return (
    <section id="services" className="services section">

      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MY <span>SERVICES</span>
        </motion.h2>

        <div className="services-grid">

          {services.map((service, index) => (

            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;