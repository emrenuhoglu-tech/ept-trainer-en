import type { MdTable } from "../content/curriculum";

// Renders a table parsed from MD in a mobile-friendly way.
export function DataTable({ table }: { table: MdTable }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-surface-3">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface-2 text-left text-neutral-300">
            {table.headers.map((h, i) => (
              <th key={i} className="px-3 py-2 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r} className="border-t border-surface-3 align-top">
              {row.map((c, i) => (
                <td
                  key={i}
                  className={
                    i === 0
                      ? "px-3 py-2 font-semibold text-neutral-100 whitespace-nowrap"
                      : "px-3 py-2 text-neutral-300"
                  }
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
