import { useMemo } from "react";
import { quickReference } from "../../content/curriculum";
import { DataTable } from "../../components/DataTable";

// The single screen you check on a break. Content comes from the MD "Quick Reference" section.
export function QuickReference() {
  const qr = useMemo(() => quickReference(), []);

  return (
    <div className="space-y-3.5 px-4 py-4">
      <h1 className="text-xl font-bold">Quick Reference</h1>

      <section>
        <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
          Decision order
        </h2>
        <ol className="space-y-0.5">
          {qr.decisionOrder.map((d, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="font-bold text-neutral-500">{i + 1}.</span>
              <span>{d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
          Sizes
        </h2>
        {qr.sizes && <DataTable table={qr.sizes} />}
      </section>

      {qr.band2530 && (
        <section>
          <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            25–30bb card
          </h2>
          <DataTable table={qr.band2530} />
        </section>
      )}

      {qr.postflop && (
        <section>
          <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            Postflop sizes (Chapter 11)
          </h2>
          <DataTable table={qr.postflop} />
        </section>
      )}

      {qr.icm && (
        <section>
          <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            ICM / Final Table card (Chapter 12)
          </h2>
          <DataTable table={qr.icm} />
        </section>
      )}

      {qr.multiway && (
        <section>
          <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            Multiway card (Chapter 13)
          </h2>
          <DataTable table={qr.multiway} />
        </section>
      )}

      {qr.tilt && (
        <section>
          <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            Tilt card (Chapter 16)
          </h2>
          <DataTable table={qr.tilt} />
        </section>
      )}

      <section>
        <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
          Red flags
        </h2>
        <ul className="space-y-1">
          {qr.redFlags.map((f, i) => (
            <li
              key={i}
              className="flex gap-2 text-[13px] leading-snug text-neutral-300"
            >
              <span className="mt-0.5 text-red-400">⚑</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
