import styles from "./infoList.module.css";

const items = [
  {
    label: "Current Status",
    content: "3rd year student, Information Technology, BD",
  },
  {
    label: "Location",
    content: "Mikkeli, Finland",
  },
  {
    label: "Open For",
    content: "Internship positions, Junior Developer positions",
  },
  {
    label: "Worked With",
    content:
      "JavaScript, TypeScript, Java, Python, React, Redux, NodeJS, NextJS, Docker, various CSS libraries including Tailwind, Styled Components, ChakraUI and more.",
  },
];

const InfoList = () => {
  return (
    <div className={styles.infoList}>
      {items.map((item) => (
        <div key={item.label} className={styles.infoListItem}>
          <span className={styles.infoListItemHeading}>{item.label}</span>
          <hr />
          <span className={styles.infoListItemText}>{item.content}</span>
        </div>
      ))}
    </div>
  );
};

export default InfoList;
