import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";

import MainPage from "../../pages/main-page/main-page";
import Page404 from "../../pages/page404/page404";

import "./app.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Page404/>}/> 
          {/* <Route path="/comics" element={<ComicsPage/>}/>
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
