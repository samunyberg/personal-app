import styles from "./App.module.css";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.projects}>
        <h2 className={styles.heading}>Projects</h2>
        <Slider />
      </div>
    </div>
  );
}

export default App;
