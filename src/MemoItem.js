import Text from "./Text";
import { useRef, useState } from "react";

const MemoItem = ({
  onEdit,
  onDelete,
  id,
  content,
  main,
  matter,
  created_date,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [localContent, setLocalContent] = useState(content);

  const localContentInput = useRef();

  const contentEdit = () => setIsEdit(!isEdit);

  const showContent = () => {
    setIsShow(!isShow);
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (content.lengtj < 1) {
      localContentInput.current.focus();
      alert("제목을 입력하세요");
      return;
    }
    if (window.confirm(`${id}의 제목을 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      contentEdit();
    }
  };

  return (
    <div className="MemoItem">
      <div className="info" onClick={showContent}>
        <div className="content">
          제목:{" "}
          {isEdit ? (
            <>
              <textarea
                ref={localContentInput}
                value={localContent}
                onClick={(e) => setLocalContent(e.target.value)}
              />
            </>
          ) : (
            <>{content}</>
          )}
        </div>
        <div className="matter">중요도:{matter}</div>
        <div className="date">
          날짜:{new Date(created_date).toLocaleString()}
        </div>
      </div>
      {isShow === true && <Text main={main} onDelete={onDelete} id={id} />}
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>취소</button>
          <button onClick={handleEdit}>완료</button>
        </>
      ) : (
        <>
          <button onClick={contentEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default MemoItem;
