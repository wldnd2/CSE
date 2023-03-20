import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Illustration from "../assets/illustration.svg";

const CheckDues = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    const url = `https://raipen.gabia.io/API/checkDues/?number=${id}&name=${name}`;
    const res = await fetch(url);
    const data = await res.json();
    data["student_id"] = id;
    data["student_name"] = name;
    console.log(data);
    navigate("./result", {state: data, name: name, id : id});
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") handleClick();
  };

  return (
    <div class = "flex justify-center items-center min-h-screen">
      <div class = "h-[90vh] w-11/12 flex justify-center p-14 bg-white drop-shadow-2xl rounded-lg">
        {/* 사진 */}
        <div class = "relative bg-indigo-900 w-96 p-10 border-solid border-2 border-sky-500">
          <img class = "" src={Illustration} alt="" />
        </div>
        {/* 폼 */}
        <div class = "w-full max-w-md p-10 border-solid border-2 border-rose-500">
          <label>
            <input class = "p-2 border border-gray-300 rounded-md"
            type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder = "이름"/>
          </label>
          <br />
          <label>
            <input class = "p-2 border border-gray-300 rounded-md"
            type="text" value={id} onChange={(e) => setId(e.target.value)} onKeyDown={handleOnKeyPress} placeholder = "학번"/>
          </label>
          <br />
          <button class = "py-2 px-4 rounded-md text-white bg-indigo-600" onClick={handleClick}>확인</button>
        </div>
      </div>
    </div>
  );
}

export default CheckDues;
