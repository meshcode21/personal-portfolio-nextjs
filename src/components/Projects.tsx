export default function Projects() {
  const projects = [
    {
      name: "EDV Result Automation",
      description:
        "An automation system that helps studio owners easily check EDV results for their clients using web scraping. It significantly reduces manual effort and saves time during high-demand periods.",
      github: "https://github.com/meshcode21/MESH-Automation-2.0-frontend",
      demo:
        "https://www.linkedin.com/posts/mahesh-udas-a691b32b3_webscraping-reactjs-nodejs-activity-7309213653956726784-YNh-",
      tech: ["React", "Node.js", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black to-gray-950 text-white border-t border-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-blue-600/30 transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-600 text-sm rounded-full text-white font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-gray-500 hover:border-white transition text-sm"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm transition"
                >
                  Demo Video
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
