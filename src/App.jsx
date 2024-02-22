import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInputContainer from "./components/UserInputContainer";

export default function App() {
  const [formData, setFormData] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  });
  

  //console.log(calculateInvestmentResults);
  //console.log(annualData);
  
    function handleChange(e, identifier) {
      setFormData({
        ...formData,
        [identifier]: +e.target.value,
      });
    }
  return (
    <>
      <Header />
      <UserInputContainer onChange={handleChange} formData={formData} />
      <Results formData={formData} investmentValue={formData.initialInvestment}/>
    </>
  );
}
