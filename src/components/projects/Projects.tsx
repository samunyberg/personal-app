import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectShow, { Project } from "./projectShow/ProjectShow";
import styles from "./projects.module.css";

const projects: Project[] = [
  {
    id: 0,
    title: "Lashes Studio by Boochita",
    subtitle: "Full-stack appointment booking service.",
    backgroundImageUrl: "/assets/lashes-studio/lashes-studio-desktop.png",
    images: [
      "/assets/lashes-studio/lashes-studio-mobile1.png",
      "/assets/lashes-studio/lashes-studio-login.png",
      "/assets/lashes-studio/lashes-studio-register.png",
      "/assets/lashes-studio/lashes-studio-step1.png",
      "/assets/lashes-studio/lashes-studio-calendar.png",
      "/assets/lashes-studio/lashes-studio-step2.png",
      "/assets/lashes-studio/lashes-studio-step3.png",
      "/assets/lashes-studio/lashes-studio-thank-you.png",
    ],
    repositoryUrl: "https://github.com/samunyberg/lashes-studio-by-boochita",
    tags: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "Full-Stack",
      "Work-In-Progress",
    ],
    features: [
      "Credential authentication",
      "Confirmation emails",
      "Admin section for management jobs",
      "Multi-step booking form",
    ],
  },
  {
    id: 1,
    title: "GameHub",
    subtitle: "Frontend for video game discovery app.",
    backgroundImageUrl: "/assets/gamehub/gamehub-landing.png",
    images: [
      "/assets/gamehub/gamehub-search.png",
      "/assets/gamehub/gamehub-filtering.png",
      "/assets/gamehub/gamehub-details.png",
      "/assets/gamehub/gamehub-light.png",
      "/assets/gamehub/gamehub-mobile1.png",
    ],
    repositoryUrl: "https://github.com/samunyberg/gamehub",
    tags: ["React", "TypeScript", "Frontend", "Demo Project"],
    features: [
      "Searching, sorting and filtering",
      "Infinite queries",
      "Light and dark modes",
      "Game data from Rawg API",
    ],
  },
  {
    id: 2,
    title: "Issue Tracker",
    subtitle: "Full-stack software project issue tracker.",
    backgroundImageUrl: "/assets/issue-tracker/issue-tracker-desktop.png",
    images: [
      "/assets/issue-tracker/issue-tracker-mobile1.png",
      "/assets/issue-tracker/issue-tracker-mobile2.png",
    ],
    repositoryUrl: "https://github.com/samunyberg/issue-tracker",
    tags: ["NextJS", "TypeScript", "Full-Stack", "Demo Project"],
    features: [
      "Google authentication",
      "MySQL database",
      "Assignation of issues to other users",
      "Dashboard for issues overview",
      "Markdown editor",
    ],
  },
  {
    id: 3,
    title: "oShop",
    subtitle: "Ecommerce site for bying organic foods.",
    backgroundImageUrl: "/assets/oshop/oshop.png",
    images: [
      "/assets/oshop/oshop-landing.png",
      "/assets/oshop/oshop-login.png",
      "/assets/oshop/oshop-filtering.png",
      "/assets/oshop/oshop.png",
      "/assets/oshop/oshop-checkout.png",
    ],
    repositoryUrl: "https://github.com/samunyberg/oshop",
    tags: ["Angular", "Firebase", "TypeScript", "Full-Stack", "Demo Project"],
    features: [
      "Credential and Google authentication",
      "Admin Section",
      "Dynamic shopping cart",
      "Data persistence with Firebase",
    ],
  },
];

const Projects = () => {
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

    if (index === currentIndex - 1 || index === currentIndex + 1)
      className += ` ${styles.nearby}`;

    return className;
  };

  const calculateIndicatorWidth = () => {
    return (100 / projects.length) * (currentIndex + 1) + "%";
  };

  const calculateTranslateWidth = () => {
    return currentIndex * 100 + "%";
  };

  const renderedSlides = projects.map((slide, index) => {
    return (
      <div key={slide.id} className={getSlideClassNames(index)}>
        <ProjectShow project={slide} />
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.slideIndicators}>
        <div
          className={`${styles.slideIndicator}`}
          style={{
            width: calculateIndicatorWidth(),
          }}
        />
      </div>
      <div className={styles.sliderContainer}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${calculateTranslateWidth()})` }}
        >
          {renderedSlides}
        </div>
      </div>
      <div className={styles.icons}>
        <FaChevronLeft
          className={styles.icon}
          size={25}
          onClick={goToPrevious}
        />
        <FaChevronRight className={styles.icon} size={25} onClick={goToNext} />
      </div>
    </div>
  );
};

export default Projects;
