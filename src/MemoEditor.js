import { useState } from "react";

const MemoEditor = () => {
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
    alert("저장하였습니다!");
  };

  return (
    <div className="MemoEditor">
      <h2>메모장</h2>
      <div>
        제목: &nbsp;
        <input
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        내용: &nbsp;
        <textarea name="main" value={state.main} onChange={handleChangeState} />
      </div>
      <div>
        중요도:&nbsp;
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
