import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="w-full bg-white text-teal-900 text-nowrap h-28 flex justify-between items-center px-6">
        {/* logo */}
        <div>
            <img className="size-16" src="/aqar_logo.png" alt="aqar misr logo"/>
        </div>

        {/* links */}
        <div className="hidden lg:block text-lg font-[500]">
            <Link className="p-4 hover:bg-gray-100 rounded-full transition" href="/">الرئيسية</Link>
            <Link className="p-4 hover:bg-gray-100 rounded-full transition" href="/">دليل عقارات</Link>
            <Link className="p-4 hover:bg-gray-100 rounded-full transition" href="/">عقاراتنا</Link>
            <Link className="p-4 hover:bg-gray-100 rounded-full transition" href="/">أحدث المشاريع</Link>
            <Link className="p-4 hover:bg-gray-100 rounded-full transition" href="/">لماذا عقار مصر</Link>
            <Link className="p-4 hover:bg-gray-100 rounded-full transition" href="/">المدونة</Link>
            <Link className="p-4 hover:bg-gray-100 rounded-full transition" href="/">تواصل معنا</Link>
        </div>

        {/* Add Prop & Phone number */}
        <div className="flex items-center gap-10">
            <div className="hidden lg:flex items-center gap-4">
                <img className="size-5" src="phone_icon.svg" alt="phone number icon"/>
                <label className="text-sm">0106 285 8443</label>
            </div>

            <button className="px-7 py-2 border border-black rounded-full hover:bg-teal-900 hover:text-white transition-colors">
                <Link href="/add-property">اضافة عقار</Link>
            </button>

        </div>
    </nav>
  )
}

export default Navbar