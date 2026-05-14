import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="">
      <div className=" mx-auto p-13">
        <img src="/rasm1.png" alt="" className="  border-b" />
      </div>

      <div className="flex items-center justify-center">
        <div className="text-center  px-4 mt-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Корзина пустая 😕
          </h1>

          <p className="text-gray-400 text-sm  mb-6">
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>

          <img src="/rasm3.png" className="w-64 mx-auto mb-6" />

          <Link href="/">
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 ">
              Вернуться назад
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
