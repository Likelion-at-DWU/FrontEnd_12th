import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Send from "./pages/Send";
import data from "./data.json";

function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []); //의존성 배열이 빈배열이면 초기에 한번만 실행

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home dataList={dataList} />} />
        <Route
          path="/detail/:postId"
          element={<Detail dataList={dataList} />}
        />
        <Route path="/send" element={<Send />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
