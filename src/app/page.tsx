"use client";

import { useState } from "react";

export default function Home() {
  // 입력값을 저장하는 상태
  const [inputText, setInputText] = useState("");
  // 변환된 텍스트를 저장하는 상태
  const [reversedText, setReversedText] = useState("");
  // 입력 이력을 저장하는 상태
  const [history, setHistory] = useState([]);
  // 에러 메시지를 저장하는 상태
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const postInputText = async (input: string, output: string) => {
    const response = await fetch(`/api/history`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input, output }),
    });

    if (!response.ok) {
      throw new Error(`Error : ${response.status}`);
    }

    return response;
  };

  // 텍스트를 뒤집어 서버로 전달하고 결과를 받아오는 함수
  const handleReverseText = async () => {
    // TODO: 입력값이 비어 있거나 너무 짧을 경우 setErrorMessage를 사용해 에러 메시지를 설정하세요.
    // TODO: 입력값을 서버로 POST 요청을 보내고, 변환된 결과를 받아 setReversedText로 설정하세요.
    setReversedText("");
    const trimedInputText = inputText.trim();

    if (trimedInputText === "") {
      setErrorMessage("글자를 입력해주세요");
      return;
    }
    if (trimedInputText.length < 3) {
      setErrorMessage("3글자 이상 입력해주세요.");
      return;
    } else {
      setErrorMessage("");
      console.log("들어온 값값", inputText);

      const reversed = inputText.split("").reverse().join("");
      console.log("reversed는", reversed);
      postInputText(inputText, reversed);
      setReversedText(reversed);
    }
  };

  // 서버에서 입력 이력을 불러오는 함수
  const handleLoadHistory = async () => {
    // TODO: 서버로 GET 요청을 보내 입력 이력을 가져오고, setHistory를 사용해 화면에 표시하세요.
    const response = await fetch(`/api/history`);
    if (!response.ok) {
      throw new Error(`Error : ${response.status}`);
    }
    const data = await response.json();
    setHistory(data);
  };

  // 입력 이력을 삭제하는 함수
  const handleDeleteHistory = async (input: string) => {
    // TODO: 서버로 DELETE 요청을 보내 해당 입력값을 삭제하고, UI를 업데이트하세요.
    const response = await fetch(`/api/history`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    if (!response.ok) {
      throw new Error(`Error : ${response.status}`);
    }
    setHistory((prev) => prev.filter((entry) => entry.input !== input));
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Reverse Text Application</h1>
      <div className="flex flex-col gap-10">
        {/* 입력 영역 */}
        <div>
          <textarea
            className="border p-2 w-full h-20"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              //   console.log(inputText);
            }}
            placeholder="Enter text here"
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleReverseText}
          >
            Reverse Text
          </button>
        </div>

        {/* 출력 영역 */}
        <div>
          <textarea
            className="border p-2 w-full h-20"
            value={reversedText}
            readOnly
            placeholder="Reversed text will appear here"
          />
        </div>

        {/* 히스토리 영역 */}
        <div>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={handleLoadHistory}
          >
            Load History
          </button>
          <ul className="mt-4 space-y-2">
            {history.map((entry: any, index) => (
              <li
                key={index}
                className="border p-2 rounded bg-gray-100 flex justify-between items-center"
              >
                <span>{`Input: ${entry.input}, Output: ${entry.output}`}</span>
                <button
                  className="text-white-500 "
                  onClick={() => handleDeleteHistory(entry.input)}
                >
                  Like
                </button>
                <button
                  className="text-red-500 underline"
                  onClick={() => handleDeleteHistory(entry.input)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
