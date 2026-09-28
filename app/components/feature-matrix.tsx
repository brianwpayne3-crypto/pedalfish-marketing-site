type FeatureGroup = { area: string; rows: { name: string; status: "Available" | "In development" }[] };

const groups: FeatureGroup[] = [
  { area: "Intake & Records", rows: ["Customer self-intake", "Customer & bike records", "Photos & condition records", "Customer communication preferences", "Service history"].map(name => ({ name, status: "Available" })) },
  { area: "Service & Repair", rows: ["Inspection workflow", "Findings & recommended work", "Customer authorization", "Additional-work authorization", "Mechanic workflow & checklists", "Job blockers & next actions"].map(name => ({ name, status: "Available" })) },
  { area: "Repair Intelligence", rows: ["Diagnostics", "Parts Finder", "Parts sourcing & tracking"].map(name => ({ name, status: "In development" })) },
  { area: "Communication", rows: [{ name: "Customer messaging", status: "Available" }, { name: "Customer status notifications", status: "Available" }, { name: "Ready-for-pickup notifications", status: "Available" }, { name: "Customer approvals & responses", status: "Available" }, { name: "Manufacturer & warranty coordination", status: "In development" }] },
  { area: "Completion & Business", rows: ["Final QC & test rides", "Payments / Square integration", "Shop-wide operational view"].map(name => ({ name, status: "Available" })) },
  { area: "Manager AI", rows: ["Daily Brief", "Ask Manager", "Evidence-grounded job answers"].map(name => ({ name, status: "Available" })) },
];

export default function FeatureMatrix() {
  return (
    <section className="feature-matrix" id="feature-matrix" aria-labelledby="matrix-title">
      <div className="matrix-heading"><div><p className="eyebrow">Quick glance</p><h2 id="matrix-title">What PedalFish covers.</h2></div><p>One view of the capabilities around a bike, a job, and the shop.</p></div>
      <div className="matrix-legend" aria-label="Capability status legend"><span><i className="status-check" aria-hidden="true">✓</i> Available</span><span><i className="status-dev" aria-hidden="true">·</i> In development</span></div>
      <div className="matrix-table" role="table" aria-label="PedalFish capabilities">
        <div className="matrix-header" role="row"><span role="columnheader">Area</span><span role="columnheader">Capability</span><span role="columnheader">Status</span></div>
        {groups.map(group => group.rows.map((row, index) => <div className="matrix-row" role="row" key={`${group.area}-${row.name}`}><span className="matrix-area" role="cell">{index === 0 ? group.area : ""}</span><span role="cell">{row.name}</span><span className={`matrix-status ${row.status === "In development" ? "is-development" : ""}`} role="cell"><i aria-hidden="true">{row.status === "Available" ? "✓" : "·"}</i><b>{row.status}</b></span></div>))}
      </div>
    </section>
  );
}
