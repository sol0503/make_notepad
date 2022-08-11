import Text from "./Text";
import { useState } from "react";
const MemoItem = ({ id, content, main, matter, created_date }) => {
  const [isShow, setIsShow] = useState(false);

  const showContent = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="MemoItem">
      <div className="info" onClick={showContent}>
        <div className="content">제목: {content}</div>
        <div className="matter">중요도:{matter}</div>
        <div className="date">
          날짜:{new Date(created_date).toLocaleString()}
        </div>
      </div>
      {isShow === true && <Text content={content} />}
    </div>
  );
};

export default MemoItem;
