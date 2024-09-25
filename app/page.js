"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <p className="text-6xl my-32">
        اهلا بكم في موقع التسجيل الخاص بشركه ابن العود
      </p>
      <button
        className="bg-red-600 text-white py-2 px-8 rounded-full mt-10"
        onClick={() => {
          router.replace("/1");
        }}
      >
        ابدء التسجيل
      </button>
    </div>
  );
}
