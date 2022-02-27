import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  Home,
  Layout,
  Navbar,
  News,
} from "./components";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <Navbar />
      </header>
      <main className="main">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/exchanges" element={<Exchanges />} />
          </Routes>
          <Routes>
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          </Routes>
          <Routes>
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          </Routes>
          <Routes>
            <Route path="/News" element={<News />} />
          </Routes>
        </Layout>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
