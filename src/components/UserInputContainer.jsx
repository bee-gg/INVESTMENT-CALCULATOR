export default function UserInputContainer({ onChange, formData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(e) => onChange(e, "initialInvestment")}
            value={formData.initialInvestment}
            required
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(e) => onChange(e, "annualInvestment")}
            value={formData.annualInvestment}
            required
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(e) => onChange(e, "expectedReturn")}
            value={formData.expectedReturn}
            required
          ></input>
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            onChange={(e) => onChange(e, "duration")}
            value={formData.duration}
            required
          ></input>
        </p>
      </div>
    </section>
  );
}
