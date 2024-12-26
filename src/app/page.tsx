'use client';

import { useState } from 'react';

export default function Home() {
    const [inputText, setInputText] = useState('');
    const [reversedText, setReversedText] = useState('');
    const [history, setHistory] = useState([]);

    const handleReverseText = async () => {
        // TODO: 입력값이 비어 있거나 너무 짧을 경우 에러 메시지를 설정하세요.
        // TODO: 입력값을 서버에 보내고 변환된 값을 받아 reversedText에 설정하세요.
    };

    const handleLoadHistory = async () => {
        // TODO: 서버에서 입력 이력을 불러와 history에 설정하세요.
    };

    return (
        <div className="p-5">
            <h1>Test Reverse Text</h1>
            <div className="flex justify-center gap-10">
                <div>
                    <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Enter text here"
                    />
                    <button onClick={handleReverseText}>Reverse Text</button>
                </div>
                <div>
                    <textarea
                        value={reversedText}
                        readOnly
                        placeholder="Reversed text will appear here"
                    />
                    <button onClick={handleLoadHistory}>Load History</button>
                    <ul className="mt-4 space-y-2">
                        {history.map((entry, index) => (
                            <li key={index} className="border p-2 rounded bg-gray-100">
                                {`Input: ${entry.input}, Output: ${entry.output}`}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
