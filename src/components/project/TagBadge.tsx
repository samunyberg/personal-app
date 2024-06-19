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
  | "In Production";

const colors: Record<Tag, { text: string; bg: string }> = {
  React: { text: "white", bg: "dodgerblue" },
  NextJS: { text: "black", bg: "white" },
  TypeScript: { text: "white", bg: "dodgerblue" },
  JavaScript: { text: "white", bg: "yellow" },
  "Tailwind CSS": { text: "white", bg: "darkCyan" },
  "Full-Stack": { text: "white", bg: "tomato" },
  Frontend: { text: "white", bg: "dodgerblue" },
  "Demo Project": { text: "white", bg: "orange" },
  "In Production": { text: "white", bg: "limeGreen" },
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
