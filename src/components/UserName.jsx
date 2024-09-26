import React, { useEffect, useState, forwardRef } from "react";
import Input from "./Input.jsx";

const UserName = forwardRef(function UserName({ onClick, inputError }, ref) {
  const fullText = "나만의 프로젝트를 완성하세요.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typeNextCharacter = () => {
      if (index < fullText.length - 1) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
        setTimeout(typeNextCharacter, 200); // 다음 문자 입력을 200ms 후에 실행
      }
    };

    typeNextCharacter(); // 첫 문자 입력 시작

    // 클린업 함수
    return () => {
      index = fullText.length; // 언마운트 시 더 이상 문자 입력하지 않도록 설정
    };
  }, []); // 빈 의존성 배열로 컴포넌트가 마운트될 때만 실행

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        {typedText}
      </h1>
      <p className="mt-2 text-lg text-center text-gray-600">
        닉네임 설정 후 바로 시작해보세요.
      </p>
      <Input
        ref={ref}
        className={`max-w-md w-full${
          inputError
            ? "border-red-500 bg-red-100 bg-opacity-50" // 에러 시 스타일
            : "border-blue-300 bg-slate-200"
        }`}
      />
      <button
        onClick={onClick}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        시작
      </button>
    </div>
  );
});

export default UserName;
