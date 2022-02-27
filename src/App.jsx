import { Layout, Space, Typography } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  Home,
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
          <div className="routes">
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
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2021
            <Link to="/">Cryptoverse Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </main>
    </div>
  );
}

export default App;
