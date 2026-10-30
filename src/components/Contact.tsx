import { Icon } from './Icon'

export function Contact() {
  return <section id="contact" className="contact-section section-pad">
    <div className="contact-layout page-grid">
      <div className="contact-copy reveal">
        <p className="eyebrow">Contato</p><h2>Tem um projeto, vaga ou ideia? Vamos conversar.</h2>
        <p>Prefiro conversas objetivas: contexto, desafio e o que precisa sair do papel. A partir daí eu respondo com próximos passos.</p>
        <div className="contact-methods flex flex-col">
          <a href="mailto:sofia.alamini06@gmail.com"><Icon name="fa-envelope" /><span>sofia.alamini06@gmail.com</span></a>
          <a href="https://www.linkedin.com/in/sofiaalamini/" target="_blank" rel="noreferrer"><Icon name="fa-linkedin" /><span>LinkedIn</span></a>
          <a href="https://github.com/sofiaalamini" target="_blank" rel="noreferrer"><Icon name="fa-github" /><span>GitHub</span></a>
        </div>
      </div>
    </div>
  </section>
}
