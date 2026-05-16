"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const API =
  "https://serve.faux-api.com/f92ae21abaa048e1a243f392/products";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(API);
      setProducts(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex justify-center items-start flex-wrap gap-6 mt-5">
      {products.map((item) => (
        <div
          key={item.id}
          className="w-80 bg-white rounded-3xl p-4 shadow-sm"
        >
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="mb-3 w-[260px] h-[260px] object-contain"
            />
          </div>

          {/* TITLE */}
          <h2 className="text-center text-xl font-bold mt-2">
            {item.title}
          </h2>

          {/* OPTIONS */}
          <div className="bg-gray-100 rounded-2xl p-2 mt-4">
            {/* DOUGH TYPE */}
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-white shadow-sm rounded-xl py-2 text-sm font-medium">
                тонкое
              </button>

              <button className="rounded-xl py-2 text-sm text-gray-500 hover:bg-white transition">
                традиционное
              </button>
            </div>

            {/* SIZE */}
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

          {/* BOTTOM */}
          <div className="flex items-center justify-between mt-5">
            <p className="text-2xl font-bold">
              от {item.price} ₽
            </p>

            <button className="flex items-center gap-2 border border-orange-500 text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
              + Добавить   <div className="bg-orange-500 w-[30px] h-[30px] flex items-center justify-center  rounded-[100px] text-white"> 2</div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}