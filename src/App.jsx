import { useState } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "HTML and CSS",
    description:
      "A hand written portfolio page with an about section, a projects section, and a contact form. The styling lives in one external stylesheet so the markup only describes structure.",
    image: "/images/portfolio.jpg",
    alt: "Screenshot of my personal portfolio website",
  },
  {
    id: 2,
    title: "Responsive Portfolio Gallery",
    category: "Responsive Design",
    description:
      "A three column gallery built with CSS grid that collapses to a single column under 700 pixels. Each card pairs an image with a short note on why that file format fit the picture.",
    image: "/images/gallery.jpg",
    alt: "Screenshot of my responsive portfolio gallery",
  },
  {
    id: 3,
    title: "JavaScript DOM Lab",
    category: "JavaScript",
    description:
      "A practice page where a button click rewrites the heading, the paragraph, and a result line. The script sits in an external file so the change survives a page refresh.",
    image: "/images/javascript.jpg",
    alt: "Screenshot of my JavaScript DOM lab after clicking the button",
  },
];

function ProfileCard(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="card">
      <img
        className="project-image"
        src={props.project.image}
        alt={props.project.alt}
      />
      <h2>{props.project.title}</h2>
      <p className="category">{props.project.category}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && <p className="description">{props.project.description}</p>}
    </article>
  );
}

function App() {
  return (
    <main>
      <h1>My Project Dashboard</h1>
      <p className="introduction">These projects show what I learned.</p>
      <section className="card-list">
        {projects.map(function (project) {
          return <ProfileCard key={project.id} project={project} />;
        })}
      </section>
    </main>
  );
}

export default App;
