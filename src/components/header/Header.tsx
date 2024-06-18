import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="links">
        <a className="link" href="https://www.github.com" target="_blank">
          <FaGithub size={25} color="#fff" />
        </a>
        <a className="link">
          <CiLinkedin
            size={25}
            color="#fff"
            href="https://www.linkedin.com"
            target="_blank"
          />
        </a>
      </div>
      <div>
        <div className="content">
          <h1 className="heading">
            Hi, I'm <span className="name">Samu Nyberg</span>
          </h1>
          <div className="sub-heading">
            <span className="typewriter">
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
            <span className="after-typewriter">Developer</span>
          </div>
        </div>
        <div className="tools-container">
          <div className="tools">
            <div className="tool">
              <img src="/src/assets/javascript-logo.png" />
            </div>
            <div className="tool">
              <img src="/src/assets/typescript-logo.png" />
            </div>
            <div className="tool">
              <img src="/src/assets/react-logo.png" />
            </div>
            <div className="tool">
              <img src="/src/assets/next-logo.png" />
            </div>
            <div className="tool">
              <img src="/src/assets/tailwind-logo.png" />
            </div>
            <div className="tool">
              <img src="/src/assets/plus-circle-icon.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
