import React from "react";
import AmbassadorCard from "../components/AmbassadorCard";
import VolunteerCard from "../components/VolunteerCard";
import GalleryLightbox from "../components/GalleryLightbox";

const ambassadors = [
  {
    name: "Shishiranjan Thakur",
    role: "Student Ambassador",
    photo: require("../assets/Ipsa.jpg"),
    bio: "CS major, hackathon enthusiast, and event organizer."
  },
  {
    name: "Sheetu Prakash Nakarmi",
    role: "Student Ambassador",
    photo: require("../assets/ambassador2.jpg"),
    bio: "Passionate about AI and community building."
  },
  {
    name: "Sumit Aryal",
    role: "Student Ambassador",
    photo: require("../assets/ambassador2.jpg"),
    bio: "Passionate about AI and community building."
  },
  {
    name: "Grace Sharon Ponmudi",
    role: "Student Ambassador",
    photo: require("../assets/ambassador2.jpg"),
    bio: "Passionate about AI and community building."
  }
];

const volunteers = [
  {
   name: "Samantha Lee", 
   role: "David Kim",
   photo: require("../assets/unnamed.png") 
  }
];



const gallery = [
  require("../assets/gallery1.jpg"),
  require("../assets/gallery2.jpg"),
  require("../assets/gallery3.jpg")
];

const resources = [
  { name: "Event Schedule (PDF)", link: "#" },
  { name: "Competition Rules", link: "#" },
  { name: "FAQ", link: "#" }
];

const AboutUs = () => (
  <section className="max-w-6xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold text-accent mb-8">About Us</h1>
    <h2 className="text-2xl font-bold text-secondary mb-4">Ambassadors</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {ambassadors.map((a, i) => <AmbassadorCard key={i} {...a} />)}
    </div>
    <h2 className="text-2xl font-bold text-secondary mb-4">Volunteers</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {volunteers.map((v, i) => <VolunteerCard key={i} {...v} />)}  
    </div>

    <h2 className="text-2xl font-bold text-secondary mb-4">Gallery</h2>
    <GalleryLightbox images={gallery} />
    <br />
    <h2 className="text-2xl font-bold text-secondary mb-4">Resources</h2>
    <ul className="mb-8 list-disc pl-6">
      {resources.map((r, i) => (
        <li key={i}><a href={r.link} className="text-accent hover:underline">{r.name}</a></li>
      ))}
    </ul>
    
  </section>
);

export default AboutUs;
