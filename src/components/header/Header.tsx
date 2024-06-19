import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.links}>
        <a className="link" href="https://www.github.com" target="_blank">
          <FaGithub size={25} color="#fff" />
        </a>
        <a className={styles.link}>
          <CiLinkedin
            size={25}
            color="#fff"
            href="https://www.linkedin.com"
            target="_blank"
          />
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

export default Header;
