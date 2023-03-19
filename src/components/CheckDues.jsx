import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <label>
        이름:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        학번:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <br />
      <button onClick={handleClick}>확인</button>
    </div>
  );
}

export default CheckDues;
