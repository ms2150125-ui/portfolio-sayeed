const entries = [
  { year: '2024', title: 'Started programming', text: 'Built a foundation through practical coding, academic learning, and continuous self-study in core technical concepts.' },
  { year: '2025', title: 'Web development & C / C++', text: 'Developed frontend projects while strengthening problem solving, structured thinking, and software fundamentals.' },
  { year: '2026', title: 'Python, DSA, Linux & cybersecurity', text: 'Expanded into systems thinking, networking, algorithmic practice, and security-focused learning with a growing hands-on approach.' }
]

export default function Experience() {
  return (
    <section className="section" id="experience" data-rgb-tooltip="Learning journey">
      <div className="container">
        <div className="journey-heading">
          <div>
            <span className="section-index">04</span>
            <div className="eyebrow">Experience</div>
            <h2>Growing through practice.</h2>
          </div>
          <p>Each chapter has strengthened my ability to learn quickly, build responsibly, and solve real problems with technology.</p>
        </div>

        <div className="timeline">
          {entries.map((entry) => (
            <article className="timeline__item" key={entry.year} data-rgb-tooltip={entry.title}>
              <span className="timeline__year">{entry.year}</span>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}