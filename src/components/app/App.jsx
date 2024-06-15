import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import MainPage from "../../pages/main-page/main-page";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        {/* <Route path="/comics" element={<ComicsPage/>}/>
        <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
        <Route path="/character/:characterId" element={<SingleCharacterPage/>}/>
        <Route path="*" element={<Page404/>}/> */}
      </Routes>    
    </Router>
    
  );
};

export default App;
