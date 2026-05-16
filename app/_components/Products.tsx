"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const API1 = "https://serve.faux-api.com/f92ae21abaa048e1a243f392/products";

const API2 =
  "https://serve.faux-api.com/f92ae21abaa048e1a243f392/products?category=";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState<number | null>(null);

  useEffect(() => {
    const url = category ? API2 + category : API1;

    axios.get(url).then((res) => {
      setProducts(res.data.result || res.data);
    });
  }, [category]);

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4 p-6">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setCategory(null)}
            className="px-4 py-2 rounded-[30px] bg-gray-200 hover:bg-gray-400 text-sm font-medium"
          >
            Все
          </button>

          <button
            onClick={() => setCategory(1)}
            className="px-4 py-2 rounded-[30px] bg-gray-200 hover:bg-gray-400 text-sm font-medium"
          >
            Мясные
          </button>

          <button
            onClick={() => setCategory(2)}
            className="px-4 py-2 rounded-[30px] bg-gray-200 hover:bg-gray-400 text-sm font-medium"
          >
            Вегетарианская
          </button>

          <button
            onClick={() => setCategory(3)}
            className="px-4 py-2 rounded-[30px] bg-gray-200 hover:bg-gray-400 text-sm font-medium"
          >
            Гриль
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="font-medium">Сортировка по:</div>
          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm text-sm font-medium">
            <option>популярности</option>
            <option>по цене</option>
            <option>по алфавиту</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-80 bg-white rounded-3xl p-4 shadow-sm"
          >
            <div className="flex justify-center">
              <img
                src={item.imageUrl}
                className="mb-3 w-[260px] h-[260px] "
              />
            </div>

            <h2 className="text-center text-xl font-bold mt-2">{item.title}</h2>

            <div className="bg-gray-100 rounded-2xl p-2 mt-4">
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-white shadow-sm rounded-xl py-2 text-sm font-medium">
                  тонкое
                </button>
                <button className="rounded-xl py-2 text-sm text-gray-500 hover:bg-white transition">
                  традиционное
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-2">
                <button className="bg-white shadow-sm rounded-xl py-2 text-sm font-medium">
                  26 см.
                </button>
                <button className="rounded-xl py-2 text-sm text-gray-500 hover:bg-white transition">
                  30 см.
                </button>
                <button className="rounded-xl py-2 text-sm text-gray-500 hover:bg-white transition">
                  40 см.
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-5">
              <p className="text-2xl font-bold">от {item.price} ₽</p>

              <button className="flex items-center gap-2 border border-orange-500 text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
                + Добавить
                <div className="bg-orange-500 w-[30px] h-[30px] flex items-center justify-center rounded-full text-white">
                  2
                </div> 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
