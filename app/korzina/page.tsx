import { SlBasket } from "react-icons/sl";

export default function Korzina() {
  return (
    <div className="flex justify-center p-8">
      <div className="w-full max-w-[900px]">
        <img
          className="mb-18 border-b border-gray-200"
          src="/rasm1.png"
          alt=""
        />

        <div className="flex items-center  justify-between mb-6">
          <h2 className="text-2xl font-bold flex gap-2">
            {" "}
            <SlBasket /> Корзина
          </h2>
          <img src="/rasm2.png" alt="" />
        </div>

        <div className="w-[760px] mx-auto bg-[#f8f8f8] p-6 rounded-xl">
          <div className="flex items-center justify-between py-5 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <img
                src="pizza1.png"
                className="w-12 h-12 rounded-full"
                alt="pizzza"
              />

              <div>
                <h3 className="text-[16px] font-semibold text-gray-900">
                  Сырный цыпленок
                </h3>
                <p className="text-[13px] text-gray-400">
                  тонкое тесто, 26 см.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-orange-500 border-orange-500 text-lg">
                −
              </button>

              <span className="text-[16px] font-medium text-gray-900">2</span>

              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 text-lg">
                +
              </button>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[16px] font-semibold text-gray-900">
                770 ₽
              </span>

              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-300 text-lg">
                ×
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <p className="text-[16px] text-gray-900">
              Всего пицц: <span className="font-bold">3 шт.</span>
            </p>

            <p className="text-[16px] text-gray-900">
              Сумма заказа:
              <span className="font-bold text-orange-500">900 ₽</span>
            </p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="px-6 py-3 rounded-full border border-gray-200 text-gray-400 text-[14px]">
              Вернуться назад
            </button>

            <button className="px-7 py-3 rounded-full  hover:bg-orange-500 bg-orange-600 text-white font-semibold text-[14px]">
              Оплатить сейчас
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
