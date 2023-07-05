import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./scss/app.scss";

import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Card data={data} />
    </div>
  );
}

export default App;
