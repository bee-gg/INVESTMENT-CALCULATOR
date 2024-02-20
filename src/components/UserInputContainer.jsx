export default function UserInputContainer({ handleChange, formData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(e) => handleChange(e, "initialInvestment")}
            value={formData.initialInvestment}
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(e) => handleChange(e, "annualInvestment")}
            value={formData.annualInvestment}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(e) => handleChange(e, "expectedReturn")}
            value={formData.expectedReturn}
          ></input>
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            onChange={(e) => handleChange(e, "duration")}
            value={formData.duration}
          ></input>
        </p>
      </div>
    </section>
  );
}
