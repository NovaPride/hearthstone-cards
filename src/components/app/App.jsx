import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header/header";

import MainPage from "../../pages/main-page/main-page";

import "./app.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/comics" element={<ComicsPage/>}/>
            <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
            <Route path="/character/:characterId" element={<SingleCharacterPage/>}/>
            <Route path="*" element={<Page404/>}/> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
