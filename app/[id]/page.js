import Step1 from "./../components/Step1";
import Step2 from "./../components/Step2";
import Step3 from "./../components/Step3";
import Step4 from "./../components/Step4";
import Finish from "./../components/Finish";
import EnterCode from "./../components/EnterCode";

function Step({ params }) {
  if (params.id == 1) {
    return <Step1 />;
  } else if (params.id == 2) {
    return <Step2 />;
  } else if (params.id == 3) {
    return <Step3 />;
  } else if (params.id == 4) {
    return <Step4 />;
  } else if (params.id == "Finish") {
    return <Finish />;
  } else if (params.id == "code1" || "code2" || "code3" || "code4") {
    return <EnterCode id={params.id} />;
  } else {
    return <p>Undifined</p>;
  }
}

export default Step;
