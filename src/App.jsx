import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Trending } from "./components/Trending";
import "./App.css";
import { More } from "./components/More";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trending />
      <More />
    </div>
  );
}

export default App;
