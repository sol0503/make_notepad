const MemoItem = ({ id, content, main, matter, created_date }) => {
  return (
    <div className="MemoItem">
      <div className="info">
        <div className="content">제목: {content}</div>
        <div className="matter">중요도:{matter}</div>
        <div className="date">
          날짜:{new Date(created_date).toLocaleString()}
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default MemoItem;
