import "./App.css";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-projects">
        <h2 className="app-heading">Projects</h2>
        <Slider />
      </div>
    </div>
  );
}

export default App;
