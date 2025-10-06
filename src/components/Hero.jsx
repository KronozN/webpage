import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="bg-primaryAlt2 py-16 flex flex-col items-center justify-center text-center">
    <motion.img
      src={require("../assets/logo.png")}
      alt="IT Code Fair Logo"
      className="h-24 mb-6 mx-auto"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    />
    <motion.h1
      className="text-4xl md:text-5xl font-bold text-accent mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      IT Code Fair 2025
    </motion.h1>
    <p className="text-lg md:text-xl mb-8">Innovate. Compete. Connect.</p>
    <Link
      to="/competitions"
      className="bg-secondary text-primary px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-secondaryAlt transition-colors"
    >
      Register Now
    </Link>
  </section>
);

export default Hero;
