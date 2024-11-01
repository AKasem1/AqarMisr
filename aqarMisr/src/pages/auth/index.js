
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Building2, Lock, Mail, Phone, User } from "lucide-react"
import Head from "next/head"

export default function Component() {
    const [isLogin, setIsLogin] = React.useState(true)
    const [isFlipping, setIsFlipping] = React.useState(false)

    const toggleForm = () => {
        setIsFlipping(true)
        setTimeout(() => {
            setIsLogin(!isLogin)
            setIsFlipping(false)
        }, 400)
    }

    return (
        <>
            <Head>
                <title>Aqar Misr | Sign-in</title>
                <meta name="description" content="سجل الدخول الان للتسجيل في موقع عقار مصر" />
                <meta name="keywords" content="Aqar Misr, تسجيل دخول, اشتراك, اشتراك في موقع عقار مصر" />
                <meta property="og:title" content="Aqar Misr | Sign-in" />
                <meta property="og:description" content="سجل الدخول الان للتسجيل في موقع عقار مصر" />
                <meta property="og:url" content="https://aqarmisr.com/auth" />
            </Head>
            <div className="min-h-screen bg-gray-100 py-12">
                <div className="container relative mx-auto max-w-sm px-4">
                    <div className="mb-8 flex justify-center gap-4 text-lg">
                        <button
                            onClick={() => !isLogin && toggleForm()}
                            className={cn(
                                "relative px-4 py-2 transition-colors",
                                isLogin ? "text-[#1d4942] font-semibold" : "text-gray-600"
                            )}
                        >
                            تسجيل دخول
                            {isLogin && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#e4c66c]"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </button>
                        <button
                            onClick={() => isLogin && toggleForm()}
                            className={cn(
                                "relative px-4 py-2 transition-colors",
                                !isLogin ? "text-teal-900 font-semibold" : "text-gray-600"
                            )}
                        >
                            إنشاء حساب
                            {!isLogin && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-amber-300"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </button>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? "login" : "register"}
                            initial={{ rotateY: isFlipping ? 90 : 0, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: 90, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="rounded-xl bg-white p-6 shadow-lg"
                        >
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                {!isLogin && (
                                    <div className="space-y-2">
                                        <label htmlFor="name">الاسم الكامل</label>
                                        <div className="focus-within:border-sky-500 focus-within:bg-sky-100 flex border p-2 rounded-xl items-center">
                                            <input id="name" type="text" className="bg-transparent focus:outline-none w-10/12" />
                                            <User className="size-5 mr-6 text-gray-400" />
                                        </div>
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <label htmlFor="email">البريد الإلكتروني</label>
                                    <div className="focus-within:border-sky-500 focus-within:bg-sky-100 flex border p-2 rounded-xl items-center">
                                        <input id="email" type="email" className="bg-transparent focus:outline-none w-10/12" />
                                        <Mail className="size-5 mr-6 text-gray-400" />
                                    </div>
                                </div>
                                {!isLogin && (
                                    <div className="space-y-2">
                                        <label htmlFor="phone">رقم الهاتف</label>
                                        <div className="focus-within:border-sky-500 focus-within:bg-sky-100 flex border p-2 rounded-xl items-center">
                                            <input id="phone" type="tel" className="bg-transparent focus:outline-none w-10/12" />
                                            <Phone className="size-5 mr-6 text-gray-400" />
                                        </div>
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <label htmlFor="password">كلمة المرور</label>
                                    <div className="focus-within:border-sky-500 focus-within:bg-sky-100 flex border p-2 rounded-xl items-center">
                                        <input id="password" type="password" className="bg-transparent focus:outline-none w-10/12" />
                                        <Lock className="size-5 mr-6 text-gray-400" />
                                    </div>
                                </div>
                                {!isLogin && (
                                    <div className="space-y-2">
                                        <label htmlFor="confirm-password">تاكيد كلمة المرور</label>
                                        <div className="focus-within:border-sky-500 focus-within:bg-sky-100 flex border p-2 rounded-xl items-center">
                                            <input id="confirm-password" type="password" className="bg-transparent focus:outline-none w-10/12" />
                                            <Lock className="size-5 mr-6 text-gray-400" />
                                        </div>
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-lg bg-teal-900 text-white hover:bg-teal-900/90"
                                >
                                    {isLogin ? "تسجيل دخول" : "إنشاء حساب"}
                                </button>
                            </form>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}
