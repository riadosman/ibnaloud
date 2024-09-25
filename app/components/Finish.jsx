import Image from "next/image";
import Done from "../images/done.png";
function Finish() {
  return (
    <div>
      <Image src={Done} alt="done" width={300} height={300} className="my-10" />
      <p>تم ارسال البيانات بشكل كامل شكرا لك</p>
    </div>
  );
}

export default Finish;
