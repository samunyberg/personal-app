import styles from "./App.module.css";
import Greeting from "./components/greeting/Greeting";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.greeting}>
        <Greeting />
      </div>
      <div className={styles.projects}>
        <Projects />
      </div>
      <div className={styles.profile}>
        <Profile />
      </div>
    </div>
  );
}

export default App;
