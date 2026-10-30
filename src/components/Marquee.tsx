const technologies = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Tailwind', 'Figma', 'Git', 'UX/UI']

export function Marquee() {
  return <section className="marquee-section" aria-label="Tecnologias em movimento"><div className="marquee-track">
    {technologies.map(name => <span key={name}>{name}</span>)}
    {technologies.map(name => <span className="marquee-duplicate" aria-hidden="true" key={`duplicate-${name}`}>{name}</span>)}
  </div></section>
}
