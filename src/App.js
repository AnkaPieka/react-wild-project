import "./App.css";
import WildersBook from "./pages/WildersBook/WildersBook";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <WildersBook />
      <Footer />
    </div>
  );
}

export default App;
