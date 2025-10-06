import React from "react";

const judges = [
  {
    name: "Dr. Alice Smith",
    bio: "Professor of Computer Science, AI researcher, and author.",
    photo: require("../assets/judge1.jpg")
  },
  {
    name: "Mr. John Doe",
    bio: "Lead Software Engineer at TechCorp, open source advocate.",
    photo: require("../assets/judge2.jpg")
  },
  {
    name: "Ms. Jane Lee",
    bio: "CTO at InnovateX, mentor and entrepreneur.",
    photo: require("../assets/judge3.jpg")
  }
];

const sponsors = [
  { name: "TechCorp", logo: require("../assets/sponsor1.png") },
  { name: "InnovateX", logo: require("../assets/sponsor2.png") },
  { name: "CodeBase", logo: require("../assets/sponsor3.png") }
];

const JudgesSponsors = () => (
  <section className="max-w-6xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold text-accent mb-8">Judges & Sponsors</h1>
    <h2 className="text-2xl font-bold text-secondary mb-4">Judges</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {judges.map((j, i) => (
        <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <img src={j.photo} alt={j.name} className="h-24 w-24 rounded-full mb-4 object-cover border-4 border-accent" />
          <h3 className="font-bold text-lg mb-2">{j.name}</h3>
          <p className="text-center">{j.bio}</p>
        </div>
      ))}
    </div>
    <h2 className="text-2xl font-bold text-secondary mb-4">Sponsors</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
      {sponsors.map((s, i) => (
        <div key={i} className="flex flex-col items-center">
          <img src={s.logo} alt={s.name} className="h-16 mb-2" />
          <span className="font-bold">{s.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default JudgesSponsors;
