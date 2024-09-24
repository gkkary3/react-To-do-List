export default function NotProject({ onClick }) {
  return (
    <div className="w-[35rem] mt-16">
      <p>No Porject Selected</p>
      <button
        onClick={onClick}
        className="px-4 py-2 text-xs rounded-md md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        create new proejct
      </button>
    </div>
  );
}
