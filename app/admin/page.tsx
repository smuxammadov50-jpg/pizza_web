import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <aside className="w-64 bg-gray-900 text-white flex flex-col justify-between">
        
        <div>
          <div className="px-6 py-5 text-xl font-bold border-b border-gray-800">
            Admin Panel
          </div>

          <nav className="p-4 space-y-2">
            
           
 <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800">
              View
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800">
              Orders
            </button>

          </nav>
        </div>

        <div className="p-4 border-t border-gray-800">
          <Link href={"/"}>
          
          <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg">
            Logout
          </button>
          </Link>
        </div>
      </aside>

      </div>
  );
}