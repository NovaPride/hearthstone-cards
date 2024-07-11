import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";

import MainPage from "../../pages/main-page/main-page";
import SearchPage from "../../pages/search-page/search-page";
import SingleCardPage from "../../pages/single-card-page/single-card-page";
import BuildPage from "../../pages/build-page/build-page";
import Page404 from "../../pages/page404/page404";

import "./app.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/card/:multiverseid" element={<SingleCardPage />} />
          <Route path="/build" element={<BuildPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
