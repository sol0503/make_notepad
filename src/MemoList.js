import MemoItem from "./MemoItem";

const MemoList = ({ memoList }) => {
  console.log(memoList);
  return (
    <div className="MemoList">
      <h3>메모 목록표</h3>
      <h4>{memoList.length}개의 메모가 있습니다.</h4>
      <div>
        {memoList.map((it) => (
          <MemoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

MemoList.defaultProps = {
  memoList: [],
};

export default MemoList;
