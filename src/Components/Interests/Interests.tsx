import "./Interests.css";

export default function Interests() {
  return (
    <article className="interests-page">
      <p className="interest-eyebrow">Outside the screen</p>
      <h1>Currently into</h1>
      <section className="golf-card" aria-labelledby="golf-title">
        <div className="golf-card-top">
          <span className="golf-icon" aria-hidden="true">⛳</span>
          <span className="golf-tag">IN PROGRESS</span>
        </div>
        <h2 id="golf-title">Golf</h2>
        <p className="golf-copy">Getting out for a round, keeping score, and slowly working on my game.</p>
        <div className="handicap">
          <span>HANDICAP INDEX</span>
          <strong>23.5</strong>
        </div>
        <div className="golf-tracking">
          <span>Rounds tracked with <strong>18Birdies</strong></span>
          <span>Scores posted to <strong>GHIN</strong></span>
        </div>
      </section>
      <p className="interest-note">I may add a round history here later. For now, this is where I’m at.</p>
    </article>
  );
}
