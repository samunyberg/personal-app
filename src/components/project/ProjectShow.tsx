import { FaGithub } from "react-icons/fa";
import styles from "./projectShow.module.css";
import TagBadge, { Tag } from "./TagBadge";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  images: string[];
  repositoryUrl: string;
  tags: Tag[];
}

interface Props {
  className?: string;
  project: Project;
  showHeader?: boolean;
}

const ProjectShow = ({ className, project, showHeader = true }: Props) => {
  return (
    <div className={`${styles.project} ${className && className}`}>
      {showHeader && (
        <div className={styles.projectHeading}>
          <a href={project.repositoryUrl} target="_blank">
            <div className={styles.title}>
              <span>{project.title}</span>
              <FaGithub />
            </div>
          </a>
          <div className={styles.subtitle}>{project.subtitle}</div>
          <div className={styles.badges}>
            {project.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </div>
      )}
      <div className={styles.projectMain}>
        <img src={project.backgroundImageUrl} className={styles.mainImage} />
        <img src={project.images![0]} className={styles.smallImage} />
      </div>
    </div>
  );
};

export default ProjectShow;
