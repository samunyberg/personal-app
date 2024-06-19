import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectShow, { Project } from "../project/ProjectShow";
import styles from "./slider.module.css";

const projects: Project[] = [
  {
    id: 0,
    title: "Lashes Studio by Boochita",
    subtitle: "Full-stack appointment booking service.",
    backgroundImageUrl: "src/assets/lashes-studio-desktop.png",
    images: ["src/assets/lashes-studio-mobile1.png"],
    repositoryUrl: "https://github.com/samunyberg/lashes-studio-by-boochita",
    tags: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "Full-Stack",
      "In Production",
    ],
  },
  {
    id: 1,
    title: "Issue Tracker",
    subtitle: "Full-stack software project issue tracker.",
    backgroundImageUrl: "src/assets/issue-tracker-desktop.png",
    images: ["src/assets/issue-tracker-mobile1.png"],
    repositoryUrl: "https://github.com/samunyberg/issue-tracker",
    tags: ["NextJS", "TypeScript", "Full-Stack", "Demo Project"],
  },
  {
    id: 2,
    title: "Game Hub",
    subtitle: "Frontend for a video game discovery app.",
    backgroundImageUrl: "src/assets/game-hub-desktop.png",
    images: ["src/assets/game-hub-mobile1.png"],
    repositoryUrl: "https://github.com/samunyberg/game-hub",
    tags: ["React", "TypeScript", "Frontend", "Demo Project"],
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
  };

  const getSlideClassNames = (index: number) => {
    let className = styles.slide;

    if (index === currentIndex) className += ` ${styles.current}`;
    else if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === projects.length - 1)
    )
      className += ` ${styles.nearby} ${styles.nearbyLeft}`;
    else if (
      index === currentIndex + 1 ||
      (currentIndex === projects.length - 1 && index === 0)
    )
      className += ` ${styles.nearby} ${styles.nearbyRight}`;

    return className;
  };

  const renderedSlides = projects.map((slide, index) => {
    return (
      <ProjectShow
        key={slide.id}
        project={slide}
        className={getSlideClassNames(index)}
        showHeader={!getSlideClassNames(index).includes("nearby")}
      />
    );
  });

  const renderedIndicators = projects.map((slide) => (
    <div
      key={slide.id}
      className={`${styles.slideIndicator} ${
        slide.id === currentIndex && styles.activeIndicator
      }`}
    />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <div className={styles.slides}>{renderedSlides}</div>
      </div>
      <div className={styles.icons}>
        <FaChevronLeft
          className={styles.icon}
          size={25}
          onClick={goToPrevious}
        />
        <FaChevronRight className={styles.icon} size={25} onClick={goToNext} />
      </div>
      <div className={styles.slideIndicators}>{renderedIndicators}</div>
    </div>
  );
};

export default Slider;
