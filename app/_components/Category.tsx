export default function Category() {
  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-[30px] bg-gray-200 hover:bg-gray-400 text-sm font-medium">
              Всe
            </button>
            <button className="px-4 py-2 rounded-[30px] bg-gray-200 hover:bg-gray-400 text-sm font-medium">
              Мясные
            </button>
            <button className="px-4 py-2 rounded-[30px] bg-gray-200 hover:bg-gray-400 text-sm font-medium">
              Вегетарианская
            </button>
            <button className="px-4 py-2 rounded-[30px] bg-gray-200 hover:bg-gray-400 text-sm font-medium">
              Гриль
            </button>
            <button className="px-4 py-2 rounded-[30px] bg-gray-200 hover:bg-gray-400 text-sm font-medium">
              Острые
            </button>
            <button className="px-4 py-2 rounded-[30px] bg-gray-200 hover:bg-gray-400 text-sm font-medium">
              Закрытые
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-medium">Сортировка по:</span>
            <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm text-sm font-medium">
              <option>популярности</option>
              <option>по цене</option>
              <option>по алфавиту</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
