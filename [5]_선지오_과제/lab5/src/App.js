import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Send from "./pages/Send";
import data from "./data.json";

function App() {
  const [dataList, setDataList] = useState([]); //데이터 리스트를 빈배열로 초기화, 초기에 한번 실행된다

  useEffect(() => {
    setDataList(data);
  }, []);

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
