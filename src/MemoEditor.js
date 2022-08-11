import { useState, useRef } from "react";

const MemoEditor = ({ onCreate }) => {
  const contentInput = useRef();
  const mainInput = useRef();

  const [state, setState] = useState({
    content: "",
    main: "",
    matter: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.content < 1) {
      alert("제목을 입력하세요");
      contentInput.current.focus();
      return;
    }
    if (state.main < 1) {
      alert("내용을 입력하세요");
      mainInput.current.focus();
      return;
    }
    onCreate(state.content, state.main, state.matter);
    console.log(state);
    alert("저장하였습니다!");
    setState({
      content: "",
      main: "",
      matter: 1,
    });
  };

  return (
    <div className="MemoEditor">
      <h2>메모장</h2>
      <div>
        제목(content): &nbsp;
        <input
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        내용(main): &nbsp;
        <textarea
          ref={mainInput}
          name="main"
          value={state.main}
          onChange={handleChangeState}
        />
      </div>
      <div>
        중요도(matter):&nbsp;
        <select name="matter" value={state.matter} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>메모 저장하기</button>
      </div>
    </div>
  );
};
export default MemoEditor;
