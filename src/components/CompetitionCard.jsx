import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CompetitionCard = ({ title, description, icon, link }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(33,22,69,0.15)" }}
    className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center transition-all border-2 border-transparent hover:border-accent"
  >
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-accent">{title}</h3>
    <p className="mb-4 text-center">{description}</p>
    <Link to={link} className="mt-auto bg-secondary text-primary px-4 py-2 rounded-2xl font-bold hover:bg-secondaryAlt transition-colors">Learn More</Link>
  </motion.div>
);

export default CompetitionCard;
