import "./project.css";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  images: string[];
  repositoryUrl: string;
  tags: string[];
}

interface Props {
  className?: string;
  project: Project;
}

const Project = ({ className, project }: Props) => {
  return (
    <div className={`project ${className ? className : ""}`}>
      <div className="project-heading">
        <a href={project.repositoryUrl} target="_blank">
          <div className="title">
            <span>{project.title}</span>
            <FaGithub />
          </div>
        </a>
        <div className="subtitle">{project.subtitle}</div>
        <div className="badges">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="project-main">
        <img src={project.backgroundImageUrl} className="main-image" />
        <img src={project.images![0]} className="small-image" />
      </div>
    </div>
  );
};

export default Project;
