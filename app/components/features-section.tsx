const runTheWork = [
  { number: "01", title: "Intake & Bike Records", body: "Customer self-intake, bike identity, concerns, photos, contact preferences, items left with the bike, and service history." },
  { number: "02", title: "Inspection & Repair Workflow", body: "Findings, recommended work, authorization, repair progress, blockers, additional work, and what comes next." },
  { number: "03", title: "Communication & Coordination", body: "Customer updates and decisions alongside manufacturer, warranty, and other external dependencies." },
];

const supportingCapabilities = ["Completion & QC", "Test Rides", "Service History", "Payments", "Square Integration", "Photos", "Customer Approvals", "Mobile Friendly"];

export default function FeaturesSection() {
  return (
    <section className="features-section" aria-labelledby="features-title">
      <div className="features-intro">
        <p className="eyebrow">Built for the whole service operation</p>
        <h2 id="features-title">Everything connected around the work.</h2>
        <p>From intake and diagnostics to parts, communication, payment, and management, PedalFish keeps the entire service operation working from the same picture of the job.</p>
      </div>

      <div className="features-work" aria-labelledby="run-work-title">
        <div className="features-subhead"><span className="features-kicker">01 / RUN THE WORK</span><h3 id="run-work-title">Make the next useful action visible.</h3></div>
        <div className="work-capabilities">
          {runTheWork.map((capability) => <article className="work-capability" key={capability.title}><span>{capability.number}</span><h4>{capability.title}</h4><p>{capability.body}</p></article>)}
        </div>
      </div>

      <div className="features-intelligence" aria-labelledby="intelligence-title">
        <div className="features-subhead"><span className="features-kicker">02 / UNDERSTAND THE REPAIR</span><h3 id="intelligence-title">Repair intelligence that gets more useful over time.</h3></div>
        <div className="intelligence-capabilities">
          <article><span className="capability-mark">DIAGNOSTICS</span><h4>Understand the problem before deciding what to do.</h4><p>Structure symptoms, findings, diagnostic steps, results, failed attempts, and eventual resolution—building useful repair knowledge along the way.</p><small>Still evolving · no autonomous diagnosis claimed</small></article>
          <article><span className="capability-mark">PARTS FINDER</span><h4>Move from “this bike needs a part” toward the right component.</h4><p>Connect the repair to sourcing options and the part decisions that keep work moving, without promising automatic ordering or guaranteed identification.</p><small>Still evolving · human judgment stays in the loop</small></article>
        </div>
      </div>

      <article className="manager-feature" aria-labelledby="manager-title">
        <div className="manager-copy"><p className="eyebrow">Manager AI</p><h3 id="manager-title">The operation can tell you what needs attention.</h3><p>Ask PedalFish what&apos;s happening across the shop. Find blocked jobs, understand why work isn&apos;t moving, identify parts that need attention, and drill into the evidence behind the answer.</p></div>
        <div className="manager-questions" aria-label="Example Manager AI questions"><span>What needs my attention today?</span><span>Which jobs are waiting on parts?</span><span>What&apos;s holding up Sandra&apos;s bike?</span></div>
      </article>

      <div className="supporting-capabilities" aria-label="Supporting capabilities"><span className="features-kicker">03 / SUPPORTING CAPABILITIES</span><div>{supportingCapabilities.map((capability) => <span key={capability}>{capability}</span>)}</div></div>
    </section>
  );
}
