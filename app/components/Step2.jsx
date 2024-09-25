"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "@formspree/react";

function Step2() {
  const [state, handleSubmit] = useForm("xjkbqzbo");
  const router = useRouter();
  const [formData, setFormData] = useState({
    brand: "",
    category: "",
    carModel: "",
    exteriorColor: "",
    chassisNumber: "",
    reservationValue: "",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const res = await handleSubmit({
      data: formData, // Submit all form data
    });

    router.replace("/3"); // Navigate to Step 2 on success
  };

  return (
    <div>
      <p className="text-xl text-stone-500 my-3">
        من أجل حجز السيارة المطلوبة يرجى ادخال البيانات التالية :
      </p>
      <form
        method="POST"
        onSubmit={onFormSubmit}
        className="flex items-center justify-center flex-wrap gap-14"
      >
        <div className="flex flex-col text-xl">
          <label>العلامة التجارية</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={(e) =>
              setFormData({ ...formData, brand: e.target.value })
            }
            placeholder="العلامة التجارية"
            className="w-[300px] lg:w-[400px] rounded-2xl mt-2 outline-none border-2 py-2 mx-5 px-5 focus:border-stone-500"
          />
        </div>
        <div className="flex flex-col text-xl">
          <label>الفئة</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            placeholder="الفئة"
            className="w-[300px] lg:w-[400px] rounded-2xl mt-2 outline-none border-2 py-2 mx-5 px-5 focus:border-stone-500"
          />
        </div>
        <div className="flex flex-col text-xl">
          <label>موديل السيارة</label>
          <input
            type="text"
            name="carModel"
            value={formData.carModel}
            onChange={(e) =>
              setFormData({ ...formData, carModel: e.target.value })
            }
            placeholder="موديل السيارة"
            className="w-[300px] lg:w-[400px] rounded-2xl mt-2 outline-none border-2 py-2 mx-5 px-5 focus:border-stone-500"
          />
        </div>
        <div className="flex flex-col text-xl">
          <label>اللون الخارجي</label>
          <input
            type="text"
            name="exteriorColor"
            value={formData.exteriorColor}
            onChange={(e) =>
              setFormData({ ...formData, exteriorColor: e.target.value })
            }
            placeholder="اللون الخارجي"
            className="w-[300px] lg:w-[400px] rounded-2xl mt-2 outline-none border-2 py-2 mx-5 px-5 focus:border-stone-500"
          />
        </div>
        <div className="flex flex-col text-xl">
          <label>رقم الشاصي</label>
          <input
            type="text"
            name="chassisNumber"
            value={formData.chassisNumber}
            onChange={(e) =>
              setFormData({ ...formData, chassisNumber: e.target.value })
            }
            placeholder="رقم الشاصي"
            className="w-[300px] lg:w-[400px] rounded-2xl mt-2 outline-none border-2 py-2 mx-5 px-5 focus:border-stone-500"
          />
        </div>
        <div className="flex flex-col text-xl">
          <label>قيمة الحجز</label>
          <input
            type="text"
            name="reservationValue"
            value={formData.reservationValue}
            onChange={(e) =>
              setFormData({ ...formData, reservationValue: e.target.value })
            }
            placeholder="قيمة الحجز"
            className="w-[300px] lg:w-[400px] rounded-2xl mt-2 outline-none border-2 py-2 mx-5 px-5 focus:border-stone-500"
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

export default Step2;
