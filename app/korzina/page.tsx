import { SlBasket } from "react-icons/sl";

export default function Korzina() {
  return (
    <div className="flex justify-center p-8">
      <div className="w-full max-w-[900px]">


        <div className="flex items-center justify-between mb-6">
         <h2 className="text-2xl font-bold flex gap-2"> <SlBasket />  Корзина</h2>
<img src="/rasm2.png" alt="" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-gray-100 flex items-center justify-center rounded">
                <span className="text-gray-500 font-bold">LOGO</span>
              </div>
              <div>
                <h3 className="font-semibold">Сырный цыпленок</h3>
                <p className="text-sm text-gray-500">тонкое тесто, 26 см</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-[32px] text-white h-[32px] rounded-[60px] bg-orange-500">-</button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-700">x2</span>
              <span className="font-medium">770 ₽</span>
            </div>
          </div>

        

        
        </div>

        <div className="mt-6 border-t pt-4">
          <p className="text-gray-700">Всего пицц: <span className="font-semibold">3 шт.</span></p>
          <p className="text-gray-700">Сумма заказа: <span className="font-semibold">900 ₽</span></p>
        </div>

        <div className="flex justify-between mt-6">
          <button className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm font-medium">
            Вернуться назад
          </button>
          <button className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm font-medium">
            Оплатить сейчас
          </button>
        </div>
      </div>
    </div>
  );
}
