/**
 * ─────────────────────────────────────────────────────────────
 *  ALT INDHOLD PÅ SIDEN STYRES HERFRA.
 *  Du behøver ikke røre resten af projektet for at opdatere dit CV.
 *  Alt er udfyldt — ret bare teksten direkte når noget ændrer sig.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  // Bruges til <title>, deling på LinkedIn m.m.
  // Ret denne hvis Vercel giver dig et andet domæne end det forventede.
  url: "https://nicklas-lindholt-jensen.vercel.app",
};

export const person = {
  name: "Nicklas L. Jensen",
  title: "Platform- og infrastrukturudvikler",
  tagline: "Linux · Docker · Automatisering",
  location: "Skjern",
  email: "nicklaslj03@gmail.com",
  phone: "+45 81 73 03 30",
  github: "https://github.com/Edmanovic",
  linkedin: "https://www.linkedin.com/in/nicklas-lindholt-jensen-716a1b315/",
  /** Læg din PDF i /public og hold navnet her i sync. */
  cvPdf: "/CV-Nicklas-L-Jensen.pdf",
};

export const profile = [
  "Jeg bygger og driver den infrastruktur, andre arbejder oven på. På Esportserien har jeg alene designet og sat en komplet platform op fra bunden — Ubuntu Server, Docker, reverse proxy med SSL, database, overvågning og automatiseret backup — og udviklet både frontend og backend til den.",
  "Sideløbende har jeg tre års erfaring med drift af et Microsoft 365-miljø i en større transportvirksomhed, hvor jeg har lært, hvad der faktisk går i stykker i produktion. Jeg automatiserer helst det, jeg ellers skulle lave to gange, og bruger AI-assisteret udvikling som fast del af arbejdsgangen til at bygge værktøjer, der fjerner manuelle trin i driften.",
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Sprog & scripting",
    items: ["JavaScript", "TypeScript", "Python", "Bash", "PowerShell"],
  },
  {
    label: "Containere & platform",
    items: ["Docker", "Docker Compose", "Linux", "Ubuntu Server"],
  },
  {
    label: "Web & netværk",
    items: ["Nginx", "Reverse proxy", "SSL/TLS", "DNS"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Backup", "Adgangsstyring"],
  },
  {
    label: "Drift & overvågning",
    items: ["Git", "GitHub", "Logopsamling", "Uptime-overvågning", "Cron"],
  },
  {
    label: "Microsoft-økosystem",
    items: ["Microsoft 365", "Intune", "Autopilot", "Entra ID", "Exchange Online"],
  },
  {
    label: "AI-assisteret udvikling",
    items: ["Claude Code", "Intern værktøjsudvikling"],
  },
];

export type Job = {
  role: string;
  org: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "IT-ansvarlig & udvikler",
    org: "Esportserien I/S",
    period: "feb. 2026 – nu",
    current: true,
    bullets: [
      "Designet og opbygget hele platformens infrastruktur fra bunden på Ubuntu Server med Docker og Docker Compose i et multi-container-setup.",
      "Opsat Nginx som reverse proxy med SSL/TLS-terminering foran platformens services.",
      "Udviklet både frontend og backend i JavaScript/TypeScript og Python, med AI-assisteret udvikling som fast del af arbejdsgangen.",
      "Opsat og driftet platformens PostgreSQL-database inklusive adgangsstyring og backupstrategi.",
      "Automatiseret tilbagevendende driftsopgaver med Bash-scripts og planlagte jobs, og etableret overvågning og logopsamling, så fejl fanges før brugerne oplever dem.",
      "Versionsstyret al kode i Git/GitHub og eneansvarlig for platformens sikkerhed, stabilitet og oppetid i produktion.",
    ],
  },
  {
    role: "IT-supporter",
    org: "System Transport A/S",
    period: "jun. 2023 – nu",
    current: true,
    bullets: [
      "Testet og implementeret automatiseret enhedsudrulning med Windows Autopilot gennem Intune, så nye maskiner klargøres uden manuel opsætning.",
      "Opsat og vedligeholdt device management, compliance- og konfigurationspolitikker på tværs af organisationens enheder.",
      "Administreret identiteter, grupper og adgange i Entra ID samt driftet Exchange Online: postkasser, mailflow og policies.",
      "Administrator på WMS-platformene Elseware og Ongoing samt integrationsplatformen Link3 / Bizbrains.",
      "Fejlsøgt og supporteret Teams, SharePoint og OneDrive samt dokumenteret processer og driftsopgaver, så viden er tilgængelig for hele teamet.",
    ],
  },
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

/**
 * Projekter vises kun hvis listen ikke er tom.
 * Tilføj dine repos her — det er det, der vejer tungest til DevOps-roller.
 */
export type Project = {
  name: string;
  description: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Esportserien – platform",
    description:
      "Selvhostet turneringsplatform med containeriseret backend og frontend bag Nginx, automatiseret backup og overvågning af oppetid.",
    stack: ["Docker Compose", "Nginx", "TypeScript", "Python", "PostgreSQL", "Ubuntu"],
    // href: "https://github.com/dit-brugernavn/esportserien", // TODO
  },
];

export const languages = "Dansk (modersmål) · Engelsk (flydende i skrift og tale)";
