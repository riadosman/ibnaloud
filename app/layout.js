import "./globals.css";
import Image from "next/image";
import Logo from "../app/images/logo.png";

export const metadata = {
  title: "شركت ابن العود",
  description: "اسم رائد في عالم استيراد المركبات من أشهر المزادات الامريكية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="text-center flex items-center flex-col p-10">
          <div class="background"></div>
          <div class="background-effect"></div>
          <Image src={Logo} alt="logo" width={128} height={72} />
          <div class="content">
            <h1 className="text-6xl mb-5">ابن العود</h1>
            <p className="text-xl text-stone-500">
              اسم رائد في عالم استيراد المركبات من أشهر المزادات الامريكية
              نساعدك في اختيار مركبة مميزة ونقوم بكافة الاجراءات الفنية
              واللوجستية حتى تصلك في الوقت والسعر المناسب
            </p>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
