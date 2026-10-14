import "./Media.css";

const collections = [
  {
    title: "Films",
    note: "A few that stayed with me",
    className: "film",
    link: "https://letterboxd.com/danielngira/",
    linkText: "Find me on Letterboxd ↗",
    items: [
      "La Haine",
      "Three Colours: Blue",
      "Investigation of a Citizen Above Suspicion",
      "A Summer’s Tale",
    ],
  },
  {
    title: "Books",
    note: "On the reading list",
    className: "book",
    link: "https://www.goodreads.com/user/show/137768409-daniel-ngira",
    linkText: "Find me on Goodreads ↗",
    items: [
      "The Brothers Karamazov",
      "Butcher’s Crossing",
      "Naomi",
      "The Sailor Who Fell from Grace with the Sea",
    ],
  },
  {
    title: "Albums",
    note: "Back in rotation",
    className: "album",
    link: "https://open.spotify.com/user/trufwil?si=c00a2ebea64b43b6",
    linkText: "Find me on Spotify ↗",
    items: ["good kid, m.A.A.d city", "Kid A Mnesia", "Pure Heroine", "Electric Ladyland"],
  },
];

export default function Media() {
  return (
    <div className="media-page">
      <div className="media-intro">
        <div>
          <p className="media-eyebrow">The personal collection</p>
          <h1>Media</h1>
          <p className="media-description">Films, books, and records I keep coming back to.</p>
        </div>
        <span className="media-stamp" aria-hidden="true">NOW<br />PLAYING</span>
      </div>

      <div className="media-collections">
        {collections.map((collection, index) => (
          <section className={`media-collection ${collection.className}`} key={collection.title}>
            <header className="collection-heading">
              <div>
                <span className="collection-index">0{index + 1}</span>
                <h2>{collection.title}</h2>
                <p>{collection.note}</p>
              </div>
              <a href={collection.link} target="_blank" rel="noreferrer">{collection.linkText}</a>
            </header>
            <ol className="media-list">
              {collection.items.map((item, itemIndex) => (
                <li key={item}>
                  <span className="media-number">{String(itemIndex + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                  <span className="media-star" aria-hidden="true">✳</span>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
      <p className="media-footnote">More notes and personal favorites coming soon.</p>
    </div>
  );
}
