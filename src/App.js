import React from "react";
import MainPage from "./Component/MainPage/MainPage";
import {HashRouter,Routes,Route} from 'react-router-dom'  

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
