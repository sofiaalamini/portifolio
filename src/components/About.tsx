
export function About() {
 return (<section id="about" className="about-section section-pad">
        <div className="section-heading reveal">
          <p className="eyebrow">Sobre</p>
          <h2>Interfaces com propósito, código limpo e atenção ao usuário.</h2>
        </div>

        <div className="about-layout page-grid">
          <div className="about-story reveal">
            <p>
              Sou desenvolvedora front-end apaixonada por transformar ideias em interfaces intuitivas,
              funcionais e com foco no usuário.
            </p>
            <p>
              Tenho experiência com HTML, CSS e JavaScript, e estou em constante evolução com React
              e TypeScript, priorizando código limpo, escalável e boas práticas de desenvolvimento.
            </p>
            <p>
              Mais do que desenvolver telas, busco entender o problema por trás de cada projeto para
              entregar soluções que realmente façam sentido para o usuário.
            </p>
            <p className="about-highlight">
              Atuei no desenvolvimento de uma solução de monitoramento inteligente de impactos ambientais
              em um hackathon, sendo responsável pela interface e experiência do usuário. O
              projeto conquistou o 4º lugar, demonstrando minha capacidade de trabalhar sob pressão,
              tomar decisões e entregar valor real.
            </p>
            <p>
              Busco uma oportunidade como Front-End Developer Jr para crescer tecnicamente e contribuir
              com produtos que gerem impacto.
            </p>
          </div>

          <div className="process-board reveal">
            <article>
              <span>01</span>
              <h3>Entender</h3>
              <p>Mapear objetivo, usuário e restrições antes de abrir o editor.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Prototipar</h3>
              <p>Testar hierarquia, fluxo e visual com iterações pequenas.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Construir</h3>
              <p>Implementar com HTML semântico, CSS responsivo e JavaScript claro.</p>
            </article>
          </div>
        </div>
      </section>)
}
