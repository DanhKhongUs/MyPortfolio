import { useState } from "react";
import { projects, ProjectType } from "~/data/projects";
import Filter from "./Filter";
import SlideUp from "./SlideUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filteredProjects = [...projects]
    .filter(
      (project) =>
        selectedFilter === "All" || project.filter.includes(selectedFilter)
    )
    .reverse();

  return (
    <section id="projects">
      <div className="relative pt-24 pb-24 md:pt-28 bg-cover bg-center">
        <h2 className="relative text-3xl font-bold mt-6 md:mt-0 md:text-4xl text-center text-gray-800">
          Projects
          <hr className="w-12 border-t-4 border-teal-600 rounded mt-2 mx-auto" />
        </h2>

        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <div
          className="animate-fadeIn grid justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_300px))] 
          gap-x-6 gap-y-6 mt-10"
        >
          {filteredProjects.map((project: ProjectType) => (
            <SlideUp
              key={project.id}
              classes="project-item"
              offset="-100px 0px -100px 0px"
            >
              <div className="relative w-full h-90 group rounded-lg overflow-hidden shadow-md cursor-pointer">
                {/* Background Image */}
                <img
                  src={project.thumbnail}
                  alt={`Thumbnail for ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay Layer */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 opacity-0 group-hover:opacity-100 
      transition-opacity duration-300 flex flex-col justify-end items-center text-center text-white pb-10"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{project.about}</p>

                  {project.tech && (
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {project.tech.map((item, index) => (
                        <span
                          key={index}
                          className="bg-white/20 backdrop-blur px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* GitHub Icon */}
                  {project.githubUrl && (
                    <Link
                      to={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-white text-4xl hover:scale-110 transition-transform"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
