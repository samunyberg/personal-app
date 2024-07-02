import { FaEnvelope, FaGithub } from "react-icons/fa";
import styles from "./mediaCard.module.css";

const MediaCard = () => {
  return (
    <div className={styles.media}>
      <div className={styles.mediaImage}>
        <img src="/assets/profileImg.jpg" />
      </div>
      <div className={styles.mediaHandles}>
        <div className={styles.mediaName}>Samu Nyberg</div>
        <div className={styles.mediaHandle}>
          <FaEnvelope size={15} />
          <span>samu.nyberg@gmail.com</span>
        </div>
        <div className={styles.mediaHandle}>
          <FaGithub size={15} />
          <span>samunyberg</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MediaCard;
