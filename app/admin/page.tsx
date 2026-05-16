import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-gray-900 text-white flex flex-col justify-between">
        <div>
          <div className="px-6 py-5 text-xl font-bold border-b border-gray-800">
            Admin Panel
          </div>

          <div className="p-4 space-y-2">
            <Link href={"/admin/products"}>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800">
                Products
              </button>
            </Link>
            <Link href={"/categories"}>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800">
                Categories
              </button>
            </Link>
            <Link href={"/admin/orders"}>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800">
                Orders
              </button>
            </Link>
          </div>
        </div>

        <div className="p-4 border-t border-gray-800">
          <Link href={"/"}>
            <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
