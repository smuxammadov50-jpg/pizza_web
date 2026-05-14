"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const API = "https://serve.faux-api.com/f92ae21abaa048e1a243f392";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
   const fetchProducts = async () => {
  try {
    const res = await axios.get(`${API}/products`);
    setProducts(res.data);
  } catch (error) {
    console.log(error);
  }
};
    fetchProducts();
  }, []);

  return (
    <div className="flex justify-center items-start flex-wrap mt-5">
      {products.map((item: any) => (
        <div
          key={item.id}
          className="w-80 bg-white rounded-3xl p-4 shadow-sm"
        >
          <div className="flex justify-center">
            <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="img-fluid mb-3"
                  width={260}
                  height={260}
                />
          </div>

          <h2 className="text-center text-xl font-bold mt-4">
            {item.title}
          </h2>

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
            <p className="text-2xl font-bold">
              от {item.price} ₽
            </p>

            <button className="flex items-center gap-2 border border-orange-500 text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
              + Добавить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;