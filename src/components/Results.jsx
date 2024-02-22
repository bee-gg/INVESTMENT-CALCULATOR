import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
export default function Results({ formData, investmentValue }) {
  const newResults = calculateInvestmentResults(formData);
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
          
            {newResults.map((resultsTable) => (
              <tr key={resultsTable.year}>
              
                <td>{resultsTable.year}</td>
                <td>{formatter.format(investmentValue)}</td>
                <td>{formatter.format(resultsTable.interest)}</td>
                <td>{formatter.format(resultsTable.valueEndOfYear)}</td>
                <td>{formatter.format(resultsTable.annualInvestment)}</td>
              </tr>
             
            ))}
          

      </tbody>
    </table>
  );
}
