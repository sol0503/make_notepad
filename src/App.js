import { useState, useRef } from "react";
import "./App.css";
import MemoEditor from "./MemoEditor";
import MemoList from "./MemoList";

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (content, main, matter) => {
    const created_date = new Date().getTime();
    const newItem = {
      content,
      main,
      matter,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <MemoEditor onCreate={onCreate} />
      <MemoList memoList={data} />
    </div>
  );
};

export default App;
