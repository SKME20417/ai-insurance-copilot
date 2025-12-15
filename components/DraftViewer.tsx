export default function DraftViewer({
  email,
  quote
}: {
  email: string;
  quote: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 text-sm">
      {email && (
        <div className="border p-3 rounded bg-gray-50">
          <h4 className="font-semibold mb-1">Drafted Email</h4>
          <pre className="whitespace-pre-wrap">{email}</pre>
        </div>
      )}
      {quote && (
        <div className="border p-3 rounded bg-gray-50">
          <h4 className="font-semibold mb-1">Drafted Quote</h4>
          <pre className="whitespace-pre-wrap">{quote}</pre>
        </div>
      )}
    </div>
  );
}
