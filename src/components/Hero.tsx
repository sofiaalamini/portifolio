import { Icon } from './Icon'
import profileImage from '../../assets/profile.jpeg'

export function Hero() {
 return (<section id="home" tabIndex={-1} className="hero-section section-pad">
        <div className="hero-grid page-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Software Engineering / Front-end</p>
            <h1 className="hero-title">Sofia Alamini.</h1>
            <p className="hero-lede">
              Desenvolvedora Front-End em formação, focada em transformar ideias em
              interfaces intuitivas, funcionais e centradas no usuário.
            </p>

            <div className="hero-actions" aria-label="Acoes principais">
              <button type="button" className="button primary" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                Ver projetos
                <Icon name="fa-arrow-right" />
              </button>
              <a className="button secondary" href="mailto:sofia.alamini06@gmail.com">
                Enviar email
                <Icon name="fa-envelope" />
              </a>
            </div>
          </div>

          <aside className="profile-panel reveal" aria-label="Resumo de Sofia">
            <div className="profile-media">
              <img src={profileImage} width="768" height="1024" fetchPriority="high" alt="Sofia Alamini" />
            </div>
            <div className="profile-notes">
              <div>
                <span>Status</span>
                <strong>Aberta a oportunidades</strong>
              </div>
              <div>
                <span>Foco</span>
                <strong>HTML, CSS, JS, UX/UI</strong>
              </div>
              <div>
                <span>Base</span>
                <strong>Cascavel PR, Brasil</strong>
              </div>
            </div>
            <div className="profile-code" aria-hidden="true">
              <span>portfolio.js</span>
              <pre>{"build({\n  focus: \"front-end\",\n  method: \"learn, test, refine\",\n  output: \"clear interfaces\"\n});"}</pre>
            </div>
          </aside>
        </div>
      </section>)
}
