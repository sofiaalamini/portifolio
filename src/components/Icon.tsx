import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faJava, faNode, faPython, faGitAlt, faFigma, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faArrowUp, faArrowUpRightFromSquare, faCode, faDatabase, faWind } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const icons: Record<string, typeof faCode> = {
  'fa-html5': faHtml5, 'fa-css3-alt': faCss3Alt, 'fa-js': faJs,
  'fa-react': faReact, 'fa-vuejs': faVuejs, 'fa-java': faJava,
  'fa-node': faNode, 'fa-python': faPython, 'fa-git-alt': faGitAlt,
  'fa-figma': faFigma, 'fa-github': faGithub, 'fa-linkedin': faLinkedin,
  'fa-arrow-right': faArrowRight, 'fa-arrow-up': faArrowUp,
  'fa-arrow-up-right-from-square': faArrowUpRightFromSquare,
  'fa-code': faCode, 'fa-database': faDatabase, 'fa-wind': faWind,
  'fa-envelope': faEnvelope,
}

export function Icon({ name }: { name: string }) {
  const [width, height, , , paths] = (icons[name] ?? faCode).icon
  return <svg className="icon" viewBox={`0 0 ${width} ${height}`} aria-hidden="true" focusable="false">
    {(Array.isArray(paths) ? paths : [paths]).map((d, index) => <path key={index} d={d} />)}
  </svg>
}
