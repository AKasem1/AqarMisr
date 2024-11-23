import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Rubik } from '@next/font/google';
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";

const rubik = Rubik({ subsets: ['latin', 'arabic'], weight: ['400', '500', '700'] });

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = user ? true : false;
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const router = useRouter();

  console.log("hi data from redux store: ", user, isAuthenticated, token);

  const handleSignout = (e) => {
    e.preventDefault()
    dispatch(logout())
    router.push("/auth")
  }

  return (
    <nav className="w-full bg-white text-teal-900 text-nowrap h-28 flex justify-between items-center px-6">
      <div>
        <img className="size-16" src="/aqar_logo.png" alt="aqar misr logo" />
      </div>

      {user? (
        <button onClick={handleSignout} className="px-7 py-2 text-white bg-teal-900 rounded-full hover:bg-white border border-teal-900 hover:text-black transition-colors">
        تسجيل خروج
      </button>
      ) :
      null
    }

      <div dir="rtl" className="text-lg font-Rubik">
        <Link className="px-4 py-2 hover:bg-gray-100 rounded-full transition" href="/">الرئيسية</Link>
        <Link className="px-4 py-2 hover:bg-gray-100 rounded-full transition" href="/">عقاراتنا </Link>
        <Link className="px-4 py-2 hover:bg-gray-100 rounded-full transition" href="/"> أحدث المشاريع </Link>
        <Link className="px-4 py-2 hover:bg-gray-100 rounded-full transition" href="/about">عن عقار مصر </Link>
        <Link className="px-4 py-2 hover:bg-gray-100 rounded-full transition" href="/">المدونة</Link>
        <Link className="px-4 py-2 hover:bg-gray-100 rounded-full transition" href="/">تواصل معنا</Link>
      </div>

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-4">
          <img className="size-5" src="/phone_icon.svg" alt="phone number icon" />
          <label className="text-sm">0106 285 8443</label>
        </div>

        {user && user.type === 'admin' ? (
            <button className="px-7 py-2 border border-black rounded-full hover:bg-teal-900 hover:text-white transition-colors">
                <Link href="/dashboard">لوحة التحكم</Link>
            </button>
            ) : user ? (
            <button className="px-7 py-2 border border-black rounded-full hover:bg-teal-900 hover:text-white transition-colors">
                <Link href="/property/add">اضافة عقار</Link>
            </button>
            ) : (
            <button className="px-7 py-2 border border-black rounded-full hover:bg-teal-900 hover:text-white transition-colors">
                <Link href="/auth">تسجيل دخول</Link>
            </button>
        )}
        <button className="hidden">
          <img className="size-8" src="/Hamburger_icon.svg" alt="toggle menu icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
