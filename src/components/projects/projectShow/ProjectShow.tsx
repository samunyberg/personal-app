import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import TagBadge, { Tag } from "../tagBadge/TagBadge";
import Images from "./Images";
import styles from "./projectShow.module.css";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  images: string[];
  repositoryUrl: string;
  tags: Tag[];
  features: string[];
}

interface Props {
  project: Project;
}

const ProjectShow = ({ project }: Props) => {
  const [showImages, setShowImages] = useState(false);

  const handleOpen = () => {
    window.scrollTo({ top: 0 });
    setShowImages(true);
  };

  const handleClose = () => {
    setShowImages(false);
  };

  const features = project.features.map((feature) => (
    <div key={feature} className={styles.feature}>
      <FaRegCircleCheck size={20} className={styles.featureIcon} />
      <span>{feature}</span>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={project.backgroundImageUrl} className={styles.image} />
      </div>
      <div className={styles.details}>
        <a href={project.repositoryUrl} target="_blank">
          <div className={styles.title}>
            <span>{project.title}</span>
          </div>
        </a>
        <div className={styles.subtitle}>{project.subtitle}</div>
        <div className={styles.badges}>
          {project.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
        <div className={styles.features}>{features}</div>
        <div className={styles.buttons}>
          <a href={project.repositoryUrl} target="_blank">
            <button>View Repository</button>
          </a>
          <button onClick={handleOpen}>View Images</button>
        </div>
      </div>
      {showImages && <Images project={project} onClose={handleClose} />}
    </div>
  );
};

export default ProjectShow;
