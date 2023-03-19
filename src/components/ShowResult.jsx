import React from "react";
import { useLocation } from "react-router-dom";

const ShowResult = () => {
  const location = useLocation();
  return (
    <div>
      <h2>결과</h2>
      {location.state && (
        <div>
          <p>이름: {location.state.student_name}</p>
          <p>학번: {location.state.student_id}</p>
          <p>납부여부: {location.state.dues ? "납부 완료" : "미납"}</p>
        </div>
      )}
    </div>
  );
};

export default ShowResult;