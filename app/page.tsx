import {
  person,
  profile,
  skills,
  experience,
  education,
  projects,
  languages,
} from "@/content/cv";

/* ── små ikoner (inline, ingen ekstra pakker) ───────── */

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 8.8 21.5c.5.1.7-.2.7-.5v-1.7C6.7 19.9 6.1 18 6.1 18c-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.5 2.5 0 0 1 4.98 3.5ZM3 8.98h4V21H3ZM9.5 8.98h3.8v1.64h.06a4.17 4.17 0 0 1 3.75-2.06c4 0 4.74 2.64 4.74 6.06V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95s-2.08 1.4-2.08 2.86V21h-4Z" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

/* ── side ───────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="wrap">
      <header>
        <h1 className="name">{person.name}</h1>
        <p className="role">{person.title}</p>
        <p className="tagline">{person.tagline}</p>

        <div className="contact">
          <a className="chip" href={`mailto:${person.email}`}>
            <IconMail />
            {person.email}
          </a>
          <a className="chip" href={`tel:${person.phone.replace(/\s/g, "")}`}>
            <IconPhone />
            {person.phone}
          </a>
          <span className="chip">
            <IconPin />
            {person.location}
          </span>
        </div>

        <div className="contact">
          <a
            className="chip"
            href={person.github}
            target="_blank"
            rel="noreferrer"
          >
            <IconGithub />
            GitHub
          </a>
          <a
            className="chip"
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedin />
            LinkedIn
          </a>
          <a className="chip chip--cta" href={person.cvPdf} download>
            <IconDownload />
            Hent CV som PDF
          </a>
        </div>
      </header>

      <section>
        <h2 className="h2">
          <span>01</span> Profil
        </h2>
        {profile.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      <section>
        <h2 className="h2">
          <span>02</span> Tekniske kompetencer
        </h2>
        <div className="skills">
          {skills.map((group) => (
            <div key={group.label}>
              <div className="skill-label">{group.label}</div>
              <div className="tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="h2">
          <span>03</span> Erhvervserfaring
        </h2>
        {experience.map((job) => (
          <article className="job" key={job.role + job.org}>
            <span className={`dot${job.current ? " dot--current" : ""}`} />
            <div className="job-head">
              <span className="job-role">{job.role}</span>
              <span className="job-org">{job.org}</span>
            </div>
            <div className="job-period">{job.period}</div>
            <ul className="bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {projects.length > 0 && (
        <section>
          <h2 className="h2">
            <span>04</span> Projekter
          </h2>
          <div className="cards">
            {projects.map((p) => {
              const inner = (
                <>
                  <div className="card-title">{p.name}</div>
                  <div className="card-desc">{p.description}</div>
                  <div className="tags">
                    {p.stack.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </>
              );
              return p.href ? (
                <a
                  className="card"
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div className="card" key={p.name}>
                  {inner}
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section>
        <h2 className="h2">
          <span>05</span> Uddannelse
        </h2>
        <div className="cards">
          {education.map((e) => (
            <div className="card" key={e.title}>
              <div className="card-title">{e.title}</div>
              <div className="card-meta">
                <span className="card-sub">{e.org}</span>
                <span className="card-period">{e.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <span>{languages}</span>
        <span>Referencer oplyses gerne på forespørgsel.</span>
      </footer>
    </main>
  );
}
