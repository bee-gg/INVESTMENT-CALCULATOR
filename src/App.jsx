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

  const inputValid = formData.duration >= 1 || formData.duration === "";

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
      {!inputValid && <p className="center">Please enter a value above 0.</p> }
      {inputValid && <Results formData={formData} />}
    </>
  );
}
