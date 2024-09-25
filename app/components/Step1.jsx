"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "@formspree/react";

function Step1() {
  const [state, handleSubmit] = useForm("xjkbqzbo");
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: "", // Use standard names for better compatibility with Formspree
    phone_number: "",
    id_number: "",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const res = await handleSubmit({
      data: {
        full_name: formData.full_name,
        phone_number: formData.phone_number,
        id_number: formData.id_number,
      },
    });

    router.replace("/code1"); // Navigate to Step 2 on success
  };

  return (
    <div>
      <p className="text-xl text-stone-500 my-3">
        من أجل حجز السيارة المطلوبة يرجى ادخال البيانات التالية :
      </p>
      <form
        method="POST"
        onSubmit={onFormSubmit}
        className="flex items-center justify-center flex-wrap gap-14 text-center"
      >
        <div className="flex flex-col text-xl">
          <label>الاسم الكامل :</label>
          <input
            type="text"
            name="full_name" // Name field
            value={formData.full_name}
            onChange={(e) =>
              setFormData({ ...formData, full_name: e.target.value })
            }
            placeholder="الاسم الكامل"
            className="w-[400px] rounded-2xl mt-2 outline-none border-2 py-2 mx-5 px-5 focus:border-stone-500"
          />
        </div>
        <div className="flex flex-col text-xl">
          <label>رقم الهاتف :</label>
          <input
            type="text"
            name="phone_number" // Phone number field
            value={formData.phone_number}
            onChange={(e) =>
              setFormData({ ...formData, phone_number: e.target.value })
            }
            placeholder="رقم الهاتف"
            className="w-[400px] rounded-2xl mt-2 outline-none border-2 py-2 mx-5 px-5 focus:border-stone-500"
          />
        </div>
        <div className="flex flex-col text-xl">
          <label>رقم الهوية :</label>
          <input
            type="text"
            name="id_number" // ID number field
            value={formData.id_number}
            onChange={(e) =>
              setFormData({ ...formData, id_number: e.target.value })
            }
            placeholder="رقم الهوية"
            className="w-[400px] rounded-2xl mt-2 outline-none border-2 py-2 mx-5 px-5 focus:border-stone-500"
          />
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

export default Step1;
