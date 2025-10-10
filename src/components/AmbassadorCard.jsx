import React from "react";

const AmbassadorCard = ({ name, role, photo, bio }) => (
  <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
    <img src={photo} alt={name} className="h-20 w-20 rounded-full mb-4 object-cover border-1.5 border-accent" />
    <h3 className="font-bold text-lg mb-1">{name}</h3>
    <p className="text-secondary font-semibold mb-2">{role}</p>
    <p className="text-center">{bio}</p>
  </div>
);

export default AmbassadorCard;
