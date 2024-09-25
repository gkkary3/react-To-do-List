export default function NotProject({ onClick }) {
  return (
    <div className="w-full max-w-md mt-16">
      <div className="flex flex-col items-center justify-center p-6 mx-auto text-gray-800 bg-white rounded-md shadow-lg">
        <p className="mb-2 text-lg font-semibold text-center">
          프로젝트가 선택되지 않았습니다.
        </p>
        <p className="mb-4 text-center text-gray-600">
          프로젝트를 선택하거나 새로 생성해주세요.
        </p>
        <button
          onClick={onClick}
          className="px-6 py-3 text-sm font-medium text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
        >
          새 프로젝트 생성
        </button>
      </div>
    </div>
  );
}
