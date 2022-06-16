import React from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

function About() {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 연습</p>
      {detail && <p>디테일의 값이 참입니다</p>}
    </div>
  );
}

export default About;
