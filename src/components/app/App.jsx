import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";

import MainPage from "../../pages/main-page/main-page";
import SearchPage from "../../pages/search-page/search-page";
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
          <Route path="/build" element={<BuildPage />} />
          <Route path="*" element={<Page404 />} />
          {/* />
            <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
            <Route path="/character/:characterId" element={<SingleCharacterPage/>}/>
            */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
