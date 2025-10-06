import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import CompetitionCard from "../components/CompetitionCard";
import { Link } from "react-router-dom";

const competitions = [
  {
    title: "Coding Challenge",
    description: "Showcase your coding skills in a timed challenge. Open to all levels.",
    icon: "💻",
    link: "/competitions#coding"
  },
  {
    title: "Poster Competition",
    description: "Present your innovative ideas visually. Great for creative minds!",
    icon: "🖼️",
    link: "/competitions#poster"
  },
  {
    title: "Research Track",
    description: "Share your research and get feedback from experts.",
    icon: "📚",
    link: "/competitions#research"
  }
];

const Home = () => (
  <>
    <Hero />
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-accent">Competitions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {competitions.map((comp, idx) => (
          <CompetitionCard key={idx} {...comp} />
        ))}
      </div>
    </section>
    <section className="bg-primaryAlt py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-secondary mb-4">Speed Dating Event</h2>
        <p className="mb-4">Network with industry professionals and peers in a fast-paced, fun environment. Limited spots available!</p>
        <Link to="/speed-dating" className="inline-block bg-secondary text-primary px-6 py-3 rounded-2xl font-bold hover:bg-secondaryAlt transition-colors">Learn More & Sign Up</Link>
      </div>
    </section>
  </>
);

export default Home;
