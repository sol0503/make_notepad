const Text = ({ onDelete, main, id }) => {
  return (
    <div className="Text">
      <div className="detail">내용 : {main}</div>
      <button
        onClick={() => {
          if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};
export default Text;
