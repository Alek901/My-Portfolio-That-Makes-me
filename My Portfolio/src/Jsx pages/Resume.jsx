function Resume() {
  const proficiencies = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'jQuery'],
    backend: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'REST APIs'],
    tools: ['Git', 'GitHub', 'VS Code', 'DevTools']
  };

  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        
        
        <div className="proficiencies">
          <h3>Technical skills of my short beard(in the procces of growing)</h3>
          
          <div className="skills-section">
            <h4>Front-End</h4>
            <ul>
              {proficiencies.frontend.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skills-section">
            <h4>Back-End</h4>
            <ul>
              {proficiencies.backend.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skills-section">
            <h4>Development Tools</h4>
            <ul>
              {proficiencies.tools.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
