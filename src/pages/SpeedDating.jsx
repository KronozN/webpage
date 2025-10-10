import React, { useState } from "react";

const SpeedDating = () => {
  const [signedUp, setSignedUp] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSignedUp(true);
  };
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-accent mb-4">Employee Speed Dating</h1>
      <p className="mb-6">
        <strong> Opportunity for the students to present their work to industries:</strong>
        <ul className="list-disc pl-6">
          <li>3-minute meetings with diverse industry representatives</li>
          <li>Introduce yourself and your work to potential employers</li>
          <li>Make a strong first impression in a short time</li>
          <li>Engage in fast-paced, impactful conversations</li>
        </ul>
<em>*Ensure your presentation is practical, concise, and industry-relevant.</em></p>
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold text-secondary mb-2">Sign Up</h2>
        {signedUp ? (
          <div className="text-green-600 font-bold">Thank you for signing up! We’ll email you event details soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" required placeholder="Your Name" className="w-full px-4 py-2 rounded-2xl border border-accent focus:outline-none" />
            <input type="email" required placeholder="Email Address" className="w-full px-4 py-2 rounded-2xl border border-accent focus:outline-none" />
            <button type="submit" className="bg-secondary text-primary px-6 py-2 rounded-2xl font-bold hover:bg-secondaryAlt transition-colors">Sign Up</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default SpeedDating;
