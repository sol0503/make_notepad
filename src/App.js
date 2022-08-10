import "./App.css";
import MemoEditor from "./MemoEditor";
import MemoList from "./MemoList";

const dummyList = [
  {
    id: 1,
    content: "1",
    main: "안녕",
    matter: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    content: "2",
    main: "안녕2",
    matter: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    content: "3",
    main: "안녕3",
    matter: 4,
    created_date: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div className="App">
      <MemoEditor />
      <MemoList memoList={dummyList} />
    </div>
  );
};

export default App;
