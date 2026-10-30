import { skillGroups, skills } from '../data'
import { Icon } from './Icon'

export function Skills() {
  return <section id="skills" className="skills-section section-pad">
    <div className="section-heading narrow reveal"><p className="eyebrow">Stack</p><h2>Habilidades organizadas pelo trabalho que elas resolvem.</h2></div>
    <div className="skill-matrix page-grid">
      {(Object.keys(skillGroups) as (keyof typeof skillGroups)[]).map(category => {
        const group = skillGroups[category]
        const items = skills.filter(skill => skill.category === category)
        return <article key={category} className="skill-cluster reveal">
          <div className="cluster-heading"><h3>{group.title}</h3><span>{String(items.length).padStart(2, '0')}</span></div>
          <p>{group.intro}</p>
          <div className="skill-tags">{items.map(skill => <span key={skill.name}><Icon name={skill.icon.split(' ').at(-1)!} />{skill.name}</span>)}</div>
        </article>
      })}
    </div>
  </section>
}
