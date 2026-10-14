import "./About.css";

export default function About() {
  return (
    <article className="about-page">
      <p className="personal-eyebrow">A little about me</p>
      <h1>Hi, I’m Daniel.</h1>
      <p className="about-lede">
        This is my corner of the internet for the things I enjoy outside the day-to-day: stories, music, and time out on a golf course.
      </p>
      <div className="about-divider" />
      <p>
        I like keeping a record of the films, books, and albums that stay with me. This page is a starting point; I’ll add the stories behind these favorites as I go.
      </p>
      <p className="about-signoff">Thanks for stopping by <span aria-hidden="true">✳</span></p>
    </article>
  );
}
