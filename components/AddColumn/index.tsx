export function AddColumn({ OnClick }: { OnClick: () => void }) {
  return (
    <div className="px-4 w-full">
      <button
        onClick={OnClick}
        type="button"
        className="bg-white  border-[#DDDFE2] dark:bg-[#080C16] dark:hover:bg-[#1D283A]/10 hover:bg-gray-200 transition cursor-pointer border-4 border-dashed dark:border-[#1D283A] flex items-center justify-center py-5 px-4 rounded-2xl w-full mb-4 "
      >
        <p className="dark:text-[#90A3B8] text-gray-500 font-bold">
          Adicionar nova coluna
        </p>
      </button>
    </div>
  );
}
