import React from "react";

const tracks = [
  {
    id: "coding",
    title: "Coding Challenge",
    details: [
      "Timed programming problems for all levels.",
      "Solo or team participation.",
      "Prizes for top performers.",
      "Languages: Python, Java, C++, JavaScript."
    ]
  },
  {
    id: "poster",
    title: "Poster Competition",
    details: [
      "Showcase your project or idea visually.",
      "Judged on creativity, clarity, and impact.",
      "Open to individuals and teams.",
      "Posters displayed during the event."
    ]
  },
  {
    id: "research",
    title: "Research Track",
    details: [
      "Present your research to a panel of experts.",
      "Receive feedback and network with academics.",
      "Best research wins awards.",
      "Open to undergraduate and graduate students."
    ]
  }
];

const Competitions = () => (
  <section className="max-w-5xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold text-accent mb-8">Competitions</h1>
    <div className="space-y-10">
      {tracks.map(track => (
        <div key={track.id} id={track.id} className="bg-white rounded-2xl shadow p-6 border-l-8 border-accent">
          <h2 className="text-2xl font-bold text-secondary mb-2">{track.title}</h2>
          <ul className="list-disc pl-6 space-y-1">
            {track.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Competitions;
