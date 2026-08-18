import {
  person,
  intro,
  experience,
  projects,
  skills,
  education,
  languages,
} from "@/content/cv";

function Sep() {
  return <span className="sep">·</span>;
}

export default function Home() {
  return (
    <main>
      <h1>{person.name}</h1>
      <p className="sub">
        {person.title} — {person.location}
      </p>

      <p className="meta">
        <a href={`mailto:${person.email}`}>{person.email}</a>
        <Sep />
        <a href={`tel:${person.phone.replace(/\s/g, "")}`}>{person.phone}</a>
      </p>
      <p className="meta">
        <a href={person.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <Sep />
        <a href={person.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <Sep />
        <a href={person.cvPdf} download>
          CV som PDF
        </a>
      </p>

      <section>
        {intro.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      <section>
        <h2>Erfaring</h2>
        {experience.map((job) => (
          <div className="entry" key={job.role + job.org}>
            <div className="entry-head">
              <span className="entry-title">{job.role}</span>
              <span className="entry-org">, {job.org}</span>
              <span className="entry-period">{job.period}</span>
            </div>
            <ul>
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {projects.length > 0 && (
        <section>
          <h2>Projekter</h2>
          {projects.map((p) => (
            <div className="entry" key={p.name}>
              <div className="entry-head">
                <span className="entry-title">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer">
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </span>
                <span className="entry-period">{p.stack}</span>
              </div>
              <p className="meta">{p.description}</p>
            </div>
          ))}
        </section>
      )}

      <section>
        <h2>Kompetencer</h2>
        <dl>
          {skills.map((s) => (
            <div className="skill" key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>Uddannelse</h2>
        {education.map((e) => (
          <div className="entry" key={e.title}>
            <div className="entry-head">
              <span className="entry-title">{e.title}</span>
              <span className="entry-period">
                {e.org} — {e.period}
              </span>
            </div>
          </div>
        ))}
      </section>

      <footer>
        <p>{languages}</p>
        <p>Referencer oplyses gerne.</p>
      </footer>
    </main>
  );
}
