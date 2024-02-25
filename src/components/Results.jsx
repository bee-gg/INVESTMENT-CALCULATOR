import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
export default function Results({ formData }) {
  const newResults = calculateInvestmentResults(formData);

  const initialInvestment =
    newResults.length === 0
      ? null
      : newResults[0].valueEndOfYear -
        newResults[0].interest -
        newResults[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th> Year </th>
          <th> Investment Value </th>
          <th> Interest (Year) </th>
          <th> Total Interest </th>
          <th> Invested Capital </th>
        </tr>
      </thead>
      <tbody>
        {newResults.map((resultsTable) => {
          const totalInterest =
            resultsTable.valueEndOfYear -
            resultsTable.annualInvestment * resultsTable.year -
            initialInvestment;
          const totalAmountInvested =
            resultsTable.valueEndOfYear - totalInterest;
          return (
            <tr key={resultsTable.year}>
              <td>{resultsTable.year}</td>
              <td>{formatter.format(resultsTable.valueEndOfYear)}</td>
              <td>{formatter.format(resultsTable.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
