import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Project from "../project/Project";
import "./slider.css";

const slides = [
  {
    index: 0,
    title: "Lashes Studio by Boochita",
    subtitle: "Full-stack appointment booking service.",
    backgroundImageUrl: "src/assets/lashes-studio-desktop.png",
    images: ["src/assets/lashes-studio-mobile1.png"],
    repositoryUrl: "https://github.com/samunyberg/lashes-studio-by-boochita",
    tags: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Full-Stack",
      "Work-In-Progress",
    ],
  },
  {
    index: 1,
    title: "Issue Tracker",
    subtitle: "Full-stack software project issue tracker.",
    backgroundImageUrl: "src/assets/issue-tracker-desktop.png",
    images: ["src/assets/issue-tracker-mobile1.png"],
    repositoryUrl: "https://github.com/samunyberg/issue-tracker",
    tags: ["NextJS", "TypeScript", "Chakra UI", "Full-Stack", "Demo Project"],
  },
  {
    index: 2,
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
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const renderedSlides = slides.map((slide, index) => {
    let className = "slide";
    if (index === currentIndex) className += " current";
    else if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === slides.length - 1)
    )
      className += " nearby left";
    else if (
      index === currentIndex + 1 ||
      (currentIndex === slides.length - 1 && index === 0)
    )
      className += " nearby right";

    return <Project key={slide.index} className={className} project={slide} />;
  });

  return (
    <div className="container">
      <div className="slider-container">
        <div className="slides">{renderedSlides}</div>
      </div>
      <div className="icons">
        <FaChevronLeft className="icon" size={25} onClick={goToPrevious} />
        <FaChevronRight className="icon" size={25} onClick={goToNext} />
      </div>
    </div>
  );
};

export default Slider;
