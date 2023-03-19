import React, { useState } from "react";

const CheckDues = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    const url = `https://raipen.gabia.io/API/checkDues/?number=${id}&name=${name}`;
    const res = await fetch(url);
    const data = await res.json();
    setResponse(JSON.stringify(data));
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
      <br />
      {/* response 변수가 존재하면 <div>{response}</div>를 출력하고, response 변수가 존재하지 않으면 출력하지 않습니다 */}
      {response && <div>{response}</div>}
    </div>
  );
}

export default CheckDues;
