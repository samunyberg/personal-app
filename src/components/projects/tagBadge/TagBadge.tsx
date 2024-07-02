import styles from "./tagBadge.module.css";

export type Tag =
  | "React"
  | "NextJS"
  | "TypeScript"
  | "JavaScript"
  | "Tailwind CSS"
  | "Full-Stack"
  | "Frontend"
  | "Demo Project"
  | "In Production"
  | "Angular"
  | "Firebase"
  | "Work-In-Progress";

const colors: Record<Tag, { text: string; bg: string }> = {
  React: { text: "white", bg: "dodgerblue" },
  NextJS: { text: "black", bg: "white" },
  TypeScript: { text: "white", bg: "royalblue" },
  JavaScript: { text: "white", bg: "yellow" },
  "Tailwind CSS": { text: "white", bg: "darkslategray" },
  "Full-Stack": { text: "white", bg: "darkcyan" },
  Frontend: { text: "white", bg: "darkorchid" },
  "Demo Project": { text: "white", bg: "orange" },
  "In Production": { text: "white", bg: "limeGreen" },
  Angular: { text: "white", bg: "darkgoldenrod" },
  Firebase: { text: "white", bg: "coral" },
  "Work-In-Progress": { text: "white", bg: "coral" },
};

interface Props {
  tag: Tag;
}

const TagBadge = ({ tag }: Props) => {
  return (
    <span
      className={styles.tag}
      style={{ backgroundColor: colors[tag].bg, color: colors[tag].text }}
    >
      {tag}
    </span>
  );
};

export default TagBadge;
