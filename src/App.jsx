import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckDues from "./components/CheckDues";
import ShowResult from "./components/ShowResult";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckDues />} />
        <Route path="/result" element={<ShowResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
