import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInputContainer from "./components/UserInputContainer";

export default function App() {
  const [formData, setFormData] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  function handleChange(e, identifier) {
    setFormData({
      ...formData,
      [identifier]: e.target.value,
    });
  }

  return (
    <>
      <Header />
      <UserInputContainer handleChange={handleChange} formData={formData} />
      <Results formData={formData} />
    </>
  );
}
