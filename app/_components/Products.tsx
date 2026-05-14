export default function Products() {
  return (
    <div className="flex justify-center p-8">
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col rounded-xl border border-gray-200 shadow-md w-[280px] h-[459px] ">
          <div className="w-full h-[200px] flex items-center justify-center bg-gray-100 rounded-t-xl">
            <h4 className="text-gray-500 font-bold text-lg">LOGO</h4>
          </div>

          <div className="flex flex-col p-6 flex-1">
            <h3 className="font-semibold text-lg mb-3 text-center">Сырная</h3>

            <div className="flex justify-center gap-2 mb-3  border-3 rounded-[30px] w-[220px]">
              <button className="px-4 py-2 rounded-full bg-gray-200 text-sm">
                тонкое
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-sm">
                традиционное
              </button>
            </div>

            <div className="flex justify-center gap-2 mb-4 border-3 rounded-[30px] w-[220px]">
              <button className="px-4 py-2 rounded-full bg-gray-200 text-sm">
                26 см
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-sm">
                30 см
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-sm">
                40 см
              </button>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div className="font-medium text-gray-700 text-lg">от 450 ₽</div>
              <button className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm font-medium">
                + Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
