import Project from './Project'

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "",
      deployedLink: "",
      githubLink: "https://github.com/Alek901/My-Portfolio-That-Makes-me",
      description: "A small project"
    },
   
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
