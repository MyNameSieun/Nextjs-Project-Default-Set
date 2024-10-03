"use client";

import useCounterStore from "../store/counterStore";

const ZustandEx = () => {
  // zustand 활용 예제
  const { count, increase, decrease } = useCounterStore();

  return (
    <div>
      <h1>샘플 카운터 앱 (with zustand)</h1>
      <p>현재 숫자: {count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
};

export default ZustandEx;
