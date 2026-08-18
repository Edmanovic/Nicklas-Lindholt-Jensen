/**
 * ─────────────────────────────────────────────────────────────
 *  ALT INDHOLD PÅ SIDEN STYRES HERFRA.
 *  Ret bare teksten direkte når noget ændrer sig.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  // Ret denne hvis Vercel giver dig et andet domæne end det forventede.
  url: "https://nicklas-lindholt-jensen.vercel.app",
};

export const person = {
  name: "Nicklas L. Jensen",
  title: "Platform- og infrastrukturudvikler",
  location: "Skjern",
  email: "nicklaslj03@gmail.com",
  phone: "+45 81 73 03 30",
  github: "https://github.com/Edmanovic",
  linkedin: "https://www.linkedin.com/in/nicklas-lindholt-jensen-716a1b315/",
  /** Læg din PDF i /public og hold navnet her i sync. */
  cvPdf: "/CV-Nicklas-L-Jensen.pdf",
};

export const intro = [
  "Jeg er 22 år og arbejder til daglig som IT-supporter hos System Transport, hvor jeg passer Microsoft 365-miljøet — Intune, Autopilot, Entra ID og Exchange.",
  "Ved siden af har jeg bygget infrastrukturen bag Esportserien. Ubuntu-servere med Docker, Nginx foran, PostgreSQL i bunden, og backup og overvågning der kører af sig selv. Frontend og backend har jeg også skrevet.",
  "Det jeg helst vil lave, er værktøjerne der fjerner det manuelle arbejde. Jeg leder efter et job inden for platform, DevOps eller intern værktøjsudvikling.",
];

export type Job = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "IT-ansvarlig og udvikler",
    org: "Esportserien I/S",
    period: "feb. 2026 – nu",
    bullets: [
      "Sat hele serveren op fra bunden på Ubuntu med Docker og Docker Compose.",
      "Nginx som reverse proxy med SSL foran de services der kører.",
      "PostgreSQL-database med adgangsstyring og backup.",
      "Skrevet frontend og backend i TypeScript og Python.",
      "Bash-scripts og cron-jobs til backup og vedligehold, så det ikke skal gøres i hånden.",
      "Overvågning og logs, så jeg opdager fejl før brugerne gør.",
      "Alt ligger i Git. Jeg står selv for drift, sikkerhed og oppetid.",
    ],
  },
  {
    role: "IT-supporter",
    org: "System Transport A/S",
    period: "jun. 2023 – nu",
    bullets: [
      "Rullet nye maskiner ud automatisk med Autopilot gennem Intune.",
      "Konfigurations- og compliance-politikker på enhederne.",
      "Brugere, grupper og adgange i Entra ID.",
      "Exchange Online: postkasser, mailflow og policies.",
      "Administrator på WMS-systemerne Elseware og Ongoing samt Link3 / Bizbrains.",
      "Daglig support på Teams, SharePoint og OneDrive. Skriver ned hvad jeg laver, så andre kan bruge det.",
    ],
  },
];

/** Vises kun hvis listen ikke er tom. Sæt href på når koden ligger offentligt. */
export type Project = {
  name: string;
  description: string;
  stack: string;
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Esportserien",
    description:
      "Turneringsplatform jeg hoster selv. Containeriseret backend og frontend bag Nginx, med automatisk backup og overvågning af oppetid.",
    stack: "Docker Compose · Nginx · TypeScript · Python · PostgreSQL · Ubuntu",
    // href: "https://github.com/Edmanovic/esportserien",
  },
];

export type SkillGroup = { label: string; items: string };

export const skills: SkillGroup[] = [
  { label: "Sprog", items: "JavaScript, TypeScript, Python, Bash, PowerShell" },
  { label: "Servere", items: "Linux (Ubuntu), Docker, Docker Compose, Nginx, SSL/TLS, DNS" },
  { label: "Data", items: "PostgreSQL, backup, adgangsstyring" },
  { label: "Drift", items: "Git, GitHub, logopsamling, uptime-overvågning, cron" },
  { label: "Microsoft", items: "Microsoft 365, Intune, Autopilot, Entra ID, Exchange Online" },
  { label: "Værktøj", items: "Claude Code til at bygge interne værktøjer" },
];

export type Education = { title: string; org: string; period: string };

export const education: Education[] = [
  {
    title: "Data- og kommunikationsuddannelsen, IT-supporter",
    org: "Erhvervsuddannelse",
    period: "jan. 2023 – jun. 2025",
  },
  {
    title: "Højere Teknisk Eksamen (HTX), Kommunikation/IT",
    org: "Gymnasial uddannelse",
    period: "aug. 2019 – jun. 2022",
  },
];

export const languages = "Dansk og engelsk, flydende i skrift og tale.";
