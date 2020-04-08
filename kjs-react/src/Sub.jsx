import React from "react";

function Sub(props) {
  const abc = props.age;
  const abcd = props.name;
  console.log(abc);
  console.log(abcd);
  return <div>{`${abcd}의 나이는 ${abc}살 입니다.`}</div>;
}

export default Sub;
