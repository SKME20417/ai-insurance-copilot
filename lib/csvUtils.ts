export async function parseCSV(file: File): Promise<any[]> {
  const text = await file.text();
  const [header, ...rows] = text.split("\n");
  const keys = header.split(",");

  return rows
    .filter(r => r.trim())
    .map(row => {
      const values = row.split(",");
      const obj: any = {};
      keys.forEach((k, i) => (obj[k] = values[i]));
      return obj;
    });
}
