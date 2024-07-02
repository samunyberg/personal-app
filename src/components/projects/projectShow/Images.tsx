import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "../../Modal";
import styles from "./images.module.css";
import { Project } from "./ProjectShow";
import { useState } from "react";

interface Props {
  project: Project;
  onClose: () => void;
}

const Images = ({ project, onClose }: Props) => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    if (index === 0) setIndex(project.images.length - 1);
    else setIndex(index - 1);
  };

  const handleNext = () => {
    if (index === project.images.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.images}>
        <div className={styles.bigImage}>
          <img src={project.images[index]} />
          <div className={styles.icons}>
            <div className={styles.iconContainer}>
              <FaChevronLeft className={styles.icon} onClick={handlePrevious} />
            </div>
            <div className={styles.iconContainer}>
              <FaChevronRight className={styles.icon} onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Images;
