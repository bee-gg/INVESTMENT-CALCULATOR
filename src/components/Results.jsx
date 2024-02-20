export default function Results({ formData }){
  return (
    <table id="result"> 
      <thead>
        <th>  Year </th>
        <th>  Investment Value </th>
        <th>  Interest (Year) </th>
        <th>  Total Interest </th>
        <th>  Invested Capital </th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{formData.initialInvestment}</td>
          <td>{formData.annualInvestment}</td>
          <td>{formData.expectedReturn}</td>
          <td>{formData.duration}</td>
        </tr>
      </tbody>
    </table>
  )
}