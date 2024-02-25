import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInputContainer from "./components/UserInputContainer";

export default function App() {
  const [formData, setFormData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const inputValid = formData.duration >=1;

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
      {inputValid && <Results formData={formData} />}
    </>
  );
}
