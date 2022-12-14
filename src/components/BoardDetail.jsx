import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "./Header";

export default function BoardDetail() {
  // 파라미터 받기
  // const params = useParams();
  // 구조 분해 할당 문법 가능
  const { boardID } = useParams();
  const { search, pathname, hash } = useLocation;
  //   쿼리 받기
  const location = useLocation();

  return (
    <>
      <Header />
      {/* 파라미터 받기 가능 */}
      {/* <h2>{params.boardID}번 게시글입니다.</h2> */}
      {/* 구조 분해 할당 문법 가능 */}
      <h2>{boardID}번 게시글입니다.</h2>
      {/* 쿼리 받기 */}
      <p>쿼리:{location.search}</p>
      <p>주소:{location.pathname}</p>
      <p>해쉬:{location.hash}</p>
    </>
  );
}
