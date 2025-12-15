export default function DataPreviewTable({ data }: { data: any[] }) {
  if (!data.length) return null;

  const headers = [
    "Customer ID",
    "Name",
    "Age",
    "Policy Interest",
    "Annual Income ($)",
    "Region",
    "Existing Policy"
  ];

  return (
    <div className="max-h-64 overflow-y-auto border rounded">

      <table className="min-w-full text-xs">
        <thead className="bg-gray-200">
          <tr>
            {headers.map(h => (
              <th key={h} className="px-3 py-2 text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t">
              <td className="px-3 py-1">{row.CustomerID}</td>
              <td className="px-3 py-1">{row.Name}</td>
              <td className="px-3 py-1">{row.Age}</td>
              <td className="px-3 py-1">{row.PolicyInterest}</td>
              <td className="px-3 py-1">
                ${Number(row.AnnualIncome).toLocaleString("en-US")}
              </td>
              <td className="px-3 py-1">{row.Region}</td>
              <td className="px-3 py-1">{row.ExistingPolicy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
