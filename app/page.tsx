import ProductShowcase from "./components/product-showcase";

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PedalFish home">
          <img src="/images/pedalfish-logo.png" alt="PedalFish" />
        </a>
        <a className="header-cta" href="mailto:hello@pedal-fish.com?subject=PedalFish%20early%20user">Talk to us <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">An operating platform for the business of bikes</p>
          <h1>Run the shop.<br /><em>Keep the bikes moving.</em></h1>
          <p className="hero-lede">PedalFish brings intake, service work, customer updates, parts, and the next useful action into one calm operating record.</p>
          <div className="hero-actions">
            <a className="primary-cta" href="#story">See PedalFish in action <span aria-hidden="true">→</span></a>
            <a className="text-cta" href="mailto:hello@pedal-fish.com?subject=PedalFish%20early%20user">Contact us <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero-note"><span className="note-mark">✳</span> Built around the work already happening in your shop.</p>
        </div>

        <div className="hero-visual" aria-label="PedalFish in a real bike shop at Max's Electric Bikes">
          <ProductShowcase />
        </div>
      </section>

      <section className="proof-strip" id="story" aria-label="PedalFish service story">
        <div><span className="proof-index">01</span><strong>Take it in</strong><small>Start with a durable record.</small></div>
        <div><span className="proof-index">02</span><strong>See what&apos;s next</strong><small>Make the work visible.</small></div>
        <div><span className="proof-index">03</span><strong>Do the work</strong><small>Keep service moving.</small></div>
        <div><span className="proof-index">04</span><strong>Close the loop</strong><small>Leave a useful history.</small></div>
      </section>

    </main>
  );
}
