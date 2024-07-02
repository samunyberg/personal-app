import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import styles from "./greeting.module.css";

const Greeting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <a
          className={styles.link}
          href="https://www.github.com/samunyberg"
          target="_blank"
        >
          <FaGithub size={23} color="#fff" />
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/samu-nyberg-137301227"
          target="_blank"
        >
          <CiLinkedin size={23} color="#fff" />
        </a>
      </div>
      <div>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Hi, I'm <span className={styles.name}>Samu Nyberg</span>
          </h1>
          <div className={styles.subHeading}>
            <span className={styles.typewriter}>
              <Typewriter
                options={{
                  strings: [
                    "Software",
                    "Web",
                    "Frontend",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "React Native",
                    "NextJS",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span className={styles.afterTypewriter}>Developer</span>
          </div>
        </div>
        <div className={styles.toolsContainer}>
          <div className={styles.tools}>
            <div className={styles.tool}>
              <img src="/src/assets/javascript-logo.png" />
            </div>
            <div className={styles.tool}>
              <img src="/src/assets/typescript-logo.png" />
            </div>
            <div className={styles.tool}>
              <img src="/src/assets/react-logo.png" />
            </div>
            <div className={styles.tool}>
              <img src="/src/assets/next-logo.png" />
            </div>
            <div className={styles.tool}>
              <img src="/src/assets/tailwind-logo.png" />
            </div>
            <div className={styles.tool}>
              <img src="/src/assets/plus-circle-icon.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
