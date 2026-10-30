import { useState } from 'react'
import { filterOptions, projects } from '../data'
import { Icon } from './Icon'

type Filter = typeof filterOptions[number]['value']

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = filter === 'all' ? projects : projects.filter(project => project.category === filter)
  return <section id="projects" className="projects-section section-pad">
    <div className="section-heading reveal"><p className="eyebrow">Projetos</p><h2>Trabalhos que mostram estudo aplicado em produto.</h2></div>
    <div className="filter-bar reveal" role="group" aria-label="Filtrar projetos">
      {filterOptions.map(option => <button key={option.value} type="button" className={filter === option.value ? 'is-active' : ''} aria-pressed={filter === option.value} onClick={() => setFilter(option.value)}>{option.label}</button>)}
    </div>
    <div className="project-list" aria-live="polite" aria-atomic="false">
      {visible.length === 0 ? <p className="project-empty" role="status">Nenhum projeto de Back-end para mostrar por enquanto.</p> : visible.map((project, index) => <article key={project.id} className="project-row reveal is-visible">
        <div className="project-index">{String(index + 1).padStart(2, '0')}</div>
        <div className="project-copy">
          <div className="project-meta"><span>{project.scope}</span><span>{project.year}</span></div>
          <h3>{project.title}</h3><p>{project.description}</p><p className="project-signal">{project.signal}</p>
          <div className="tech-stack">{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
        </div>
        <a className="project-preview" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Abrir demo de ${project.title}`}>
          <div className="browser-bar" aria-hidden="true"><span /><span /><span /></div>
          <img className="w-full object-cover" src={`/previews/${project.title.toLowerCase()}.jpg`} alt={`Captura da demo de ${project.title}`} width="1280" height="720" loading="lazy" decoding="async" />
        </a>
        <div className="project-actions">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Live de ${project.title}`}><span>Live</span><Icon name="fa-arrow-up-right-from-square" /></a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Código de ${project.title}`}><span>Código</span><Icon name="fa-github" /></a>
        </div>
      </article>)}
    </div>
  </section>
}
