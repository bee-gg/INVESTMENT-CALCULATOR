export default function UserInputContainer() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number"></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number"></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number"></input>
        </p>
        <p>
          <label>DURATION</label>
          <input type="number"></input>
        </p>
      </div>
    </section>
  );
}
